#!/usr/bin/env node
import { Command } from "../node_modules/commander/esm.mjs";
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .helpOption('-h, --help', 'output usage information')
    .arguments('[type]')
    .option('-f, --format [type]', 'output format')

program.command('compare')
    .option('-V, --version', 'output the version number')

program.parse();