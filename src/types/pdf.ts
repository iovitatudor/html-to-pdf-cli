export type PdfFormat =
    | 'A4'
    | 'A3'
    | 'A5'
    | 'Letter'
    | 'Legal';

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
