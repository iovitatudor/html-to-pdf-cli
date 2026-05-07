import fs from 'fs/promises';
import path from 'path';

import puppeteer, {
    Browser,
    PDFOptions,
    Page
} from 'puppeteer';

import {
    GeneratePdfOptions,
    MarginOptions
} from '../../types/pdf.js';

const DEFAULT_MARGIN: MarginOptions = {
    top: '20px',
    right: '20px',
    bottom: '20px',
    left: '20px'
};

const DEFAULT_PDF_OPTIONS: PDFOptions = {
    format: 'A4',
    landscape: false,
    printBackground: true
};

async function createBrowser(): Promise<Browser> {
    return puppeteer.launch({
        headless: true
    });
}

async function loadHtmlContent(
    inputPath: string
): Promise<string> {
    const resolvedPath = path.resolve(inputPath);

    return fs.readFile(resolvedPath, 'utf8');
}

async function createPage(
    browser: Browser
): Promise<Page> {
    return browser.newPage();
}

export async function generatePdf({
                                      inputPath,
                                      outputPath,
                                      format = DEFAULT_PDF_OPTIONS.format,
                                      landscape = DEFAULT_PDF_OPTIONS.landscape,
                                      margin = DEFAULT_MARGIN
                                  }: GeneratePdfOptions): Promise<void> {
    const browser = await createBrowser();

    try {
        const page = await createPage(browser);

        const htmlContent = await loadHtmlContent(
            inputPath
        );

        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });

        await page.pdf({
            path: outputPath,
            format,
            landscape,
            margin,
            printBackground:
            DEFAULT_PDF_OPTIONS.printBackground
        });

        await page.close();
    } finally {
        await browser.close();
    }
}
