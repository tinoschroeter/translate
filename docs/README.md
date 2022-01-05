# Translate

![last-commit](https://img.shields.io/github/last-commit/tinoschroeter/translate.svg?style=flat)
[![GitHub Super-Linter](https://github.com/tinoschroeter/translate/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/tinoschroeter/translate/actions/workflows/linter.yml)

> install globally

```javaScript
npm i -g
```

[Get API Key on https://www.deepl.com](https://www.deepl.com/de/translator)

```shell
export DEEPL_KEY="123456789012345678901234:ar"
~/.zshrc
```

```shell
$ translate --help 
Usage: index [options]

Simply translate in CLI
export DEEPL_KEY='23456789012345678901234:ar'
lang default de -> en

Options:
  -l, --lang <value...>  set language -l from to | -l en de
  -f --file <value>      translate a file
  -i --interactive       translate in interactive mode
  -v, --vers             output the current version
  -h, --help             display help for command
```
