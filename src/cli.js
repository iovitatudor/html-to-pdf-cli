import {Command} from 'commander';
import chalk from 'chalk';
import {generatePdf} from './pdf.js';

const program = new Command();

program
    .name('htmlpdf')
    .description('Convert HTML to PDF')
    .version('1.0.0');

program
    .command('generate')
    .argument('<input>', 'Input HTML file')
    .argument('<output>', 'Output PDF file')

    .option('--format <format>', 'Page format', 'A4')
    .option('--landscape', 'Landscape orientation')
    .option('--margin <margin>', 'Page margin', '20px')

    .action(async (input, output, options) => {
        try {
            console.log(chalk.blue('Generating PDF...'));

            await generatePdf({
                input,
                output,
                format: options.format,
                landscape: options.landscape || false,
                margin: options.margin
            });

            console.log(
                chalk.green(`PDF created successfully: ${output}`)
            );
        } catch (error) {
            console.error(chalk.red(error.message));

            process.exit(1);
        }
    });

program.parse();
