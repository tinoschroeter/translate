const translate = require("translate");
const readline = require("readline");
const { langError } = require("./error.js");

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

let lang

const interactive = (setLang) => {
  if (!setLang) lang = { from: "de", to: "en" };
  if (setLang && setLang.length < 2) return langError();
  if (setLang) lang = { from: setLang[0], to: setLang[1] };

  const translation = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  translation.question("", (data) => {
    translate(data, lang).then((result) => {
      console.log(result);
      translation.close();
    });
  });
};

module.exports = interactive;
