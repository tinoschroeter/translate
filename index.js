#! /usr/bin/env node

const { program } = require('commander')

const file = require('./commands/file')
const interactive = require('./commands/interactive')

program
    .command('file <filename>')
    .description('translate a file | default de-> en')
    .action(file)

program
    .command('interactive')
    .description('translate in interactive mode | default de-> en')
    .action(interactive)

program
  .version('1.0.0', '-v, --vers', 'output the current version');

program.parse();
