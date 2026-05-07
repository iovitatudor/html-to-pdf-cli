import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

export async function generatePdf({
                                      input,
                                      output,
                                      format = 'A4',
                                      landscape = false,
                                      margin = '20px'
                                  }) {
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
        format,
        landscape,
        printBackground: true,

        margin: {
            top: margin,
            right: margin,
            bottom: margin,
            left: margin
        }
    });

    await browser.close();
}
