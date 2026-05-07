import fs from 'fs/promises';
import path from 'path';

import puppeteer from 'puppeteer';

import { GeneratePdfOptions } from '../../types/pdf.js';

export async function generatePdf({
                                      inputPath,
                                      outputPath,
                                      format = 'A4',
                                      landscape = false,

                                      margin = {
                                          top: '20px',
                                          right: '20px',
                                          bottom: '20px',
                                          left: '20px'
                                      }
                                  }: GeneratePdfOptions): Promise<void> {
    const browser = await puppeteer.launch({
        headless: true
    });

    try {
        const page = await browser.newPage();

        const resolvedInputPath = path.resolve(inputPath);

        const html = await fs.readFile(
            resolvedInputPath,
            'utf8'
        );

        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });

        await page.pdf({
            path: outputPath,
            format,
            landscape,
            printBackground: true,
            margin
        });
    } finally {
        await browser.close();
    }
}
