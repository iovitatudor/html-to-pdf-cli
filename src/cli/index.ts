import { Command } from 'commander';

import { registerGenerateCommand } from './commands/generate.command.js';

const program = new Command();

program
    .name('htmlpdf')
    .description('Modern HTML to PDF CLI')
    .version('1.0.0');

registerGenerateCommand(program);

program.parse();
