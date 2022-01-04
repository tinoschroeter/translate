# Translate

![](https://img.shields.io/github/last-commit/tinoschroeter/translate.svg?style=flat)
[![GitHub Super-Linter](https://github.com/tinoschroeter/translate/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/tinoschroeter/translate/actions/workflows/linter.yml)

> install globally

```javaScript
npm i -g
```

[get api key on https://www.deepl.com](https://www.deepl.com/de/translator)

```shell
export DEEPL_KEY="123456789012345678901234:ar"
~/.zshrc
```

```shell
 translate --help 
Usage: translate [options] [command]

Options:
  -v, --vers       output the current version
  -h, --help       display help for command

Commands:
  file <filename>  translate a file | default de-> en
  interactive      translate in interactive mode | default de-> en
  help [command]   display help for command

```
