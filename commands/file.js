const translate = require("translate");
const fs = require("fs");
const { langError } = require("./error.js");

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

let lang;

const file = (file, setLang) => {
  if (!setLang) lang = { from: "de", to: "en" };
  if (setLang && setLang.length < 2) return langError();
  if (setLang) lang = { from: setLang[0], to: setLang[1] };

  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    translate(data, lang).then((result) => console.log(result));
  });
};

module.exports = file;
