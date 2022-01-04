const translate = require("translate");
const fs = require("fs");
const readline = require("readline");

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

const interactive = () => {
  const options = { from: "de", to: "en" };

  const translation = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  translation.question("", (data) => {
    translate(data, options).then((result) => {
      console.log(result);
      translation.close();
    });
  });
};

module.exports = interactive;
