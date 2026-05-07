import chalk from 'chalk';
import { Command } from 'commander';

import { generatePdf } from '../../services/pdf/generate-pdf.js';

import { PdfFormat } from '../../types/pdf.js';

export function registerGenerateCommand(program: Command): void {
    program
        .command('generate')
        .alias('g')

        .description('Generate PDF from HTML file')

        .argument('<input>', 'Path to input HTML file')
        .argument('<output>', 'Path to output PDF file')

        .option(
            '-f, --format <format>',
            'PDF page format',
            'A4'
        )

        .option(
            '-l, --landscape',
            'Enable landscape orientation'
        )

        .action(
            async (
                input: string,
                output: string,
                options: {
                    format: PdfFormat;
                    landscape?: boolean;
                }
            ) => {
                try {
                    console.log(
                        chalk.blue('Generating PDF...')
                    );

                    await generatePdf({
                        inputPath: input,
                        outputPath: output,

                        format: options.format,

                        landscape:
                            options.landscape ?? false
                    });

                    console.log(
                        chalk.green(
                            `PDF created successfully: ${output}`
                        )
                    );
                } catch (error) {
                    const message =
                        error instanceof Error
                            ? error.message
                            : 'Unknown error';

                    console.error(
                        chalk.red(`Error: ${message}`)
                    );

                    process.exit(1);
                }
            }
        );
}
