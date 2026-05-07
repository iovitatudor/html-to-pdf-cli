import { PDFOptions } from 'puppeteer';

export type PdfFormat = NonNullable<PDFOptions['format']>;

export interface MarginOptions {
    top: string;
    right: string;
    bottom: string;
    left: string;
}

export interface GeneratePdfOptions {
    inputPath: string;
    outputPath: string;

    format?: PdfFormat;

    landscape?: boolean;

    margin?: MarginOptions;
}
