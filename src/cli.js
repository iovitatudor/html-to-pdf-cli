import { Command } from 'commander';
import chalk from 'chalk';
import { generatePdf } from './pdf.js';

const program = new Command();

program
    .name('htmlpdf')
    .description('Convert HTML to PDF')
    .version('1.0.0');

program
    .command('generate')
    .argument('<input>', 'Input HTML file')
    .argument('<output>', 'Output PDF file')

    .action(async (input, output) => {
        try {
            console.log(chalk.blue('Generating PDF...'));

            await generatePdf(input, output);

            console.log(
                chalk.green(`PDF created successfully: ${output}`)
            );
        } catch (error) {
            console.error(chalk.red(error.message));

            process.exit(1);
        }
    });

program.parse();
