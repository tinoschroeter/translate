#! /usr/bin/env node

const { program } = require("commander");

const fileHandler = require("./commands/file");
const interactiveHandler = require("./commands/interactive");

const handler = (option) => {
  if (Object.keys(option).length === 0) return program.help();

  const { file, lang, interactive } = option;

  if (file) return fileHandler(file, lang);
  if (interactive) return interactiveHandler(lang);
};

program
  .option("-l, --lang <value...>", "set language -l from to | -l en de")
  .option("-f --file <value>", "translate a file")
  .option("-i --interactive", "translate in interactive mode")
  .action(handler);

program
  .version("1.1.0", "-v, --vers", "output the current version")
  .description(
    "Simply translate in CLI\nexport DEEPL_KEY='23456789012345678901234:ar'\nlang default de -> en"
  );

program.parse();
