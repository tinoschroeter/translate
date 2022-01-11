# Translate

![last-commit](https://img.shields.io/github/last-commit/tinoschroeter/translate.svg?style=flat)
[![GitHub Super-Linter](https://github.com/tinoschroeter/translate/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/tinoschroeter/translate/actions/workflows/linter.yml)

> install globally

```javaScript
git clone https://github.com/tinoschroeter/translate.git
npm i -g
```

You need an API Key from [www.deepl.com](https://www.deepl.com/de/translator)

```shell
export DEEPL_KEY="<API Key>"
~/.zshrc
```

```shell
$ translate --help 
Usage: index [options]

Translate in the cli
export DEEPL_KEY='<API Key>'
lang default de -> en

Options:
  -l, --lang <value...>  set language -l from to | -l de en
  -f --file <value>      translate a file
  -i --interactive       translate in interactive mode
  -v, --vers             output the current version
  -h, --help             display help for command
```
