const chalk = require("chalk");

module.exports.langError = () => {
  return console.log(chalk.red.bold("Error: use -l de en"));
};
