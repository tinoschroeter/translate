const translate = require("translate");
const fs = require("fs");

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

const file = (filename) => {
  const options = { from: "de", to: "en" };
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    translate(data, options).then((result) => console.log(result));
  });
};

module.exports = file;
