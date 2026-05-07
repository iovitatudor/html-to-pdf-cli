import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

export async function generatePdf(input, output) {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();

    const htmlPath = path.resolve(input);

    const html = await fs.readFile(htmlPath, 'utf8');

    await page.setContent(html, {
        waitUntil: 'networkidle0'
    });

    await page.pdf({
        path: output,
        format: 'A4',
        printBackground: true
    });

    await browser.close();
}
