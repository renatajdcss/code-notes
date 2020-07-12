---
title: Regular Expressions
tags:
- regex
emoji: 
link: 
---
## Basic Regex

| Type | Regex  | Meaning |
| ------------ | ------ | -------------|
| 1 char       | `.`     | any character|
| 0 to infintiy   | `.*`     | 0 or more occurrences of regular exp directly preceeding it|
| lowercase letters | `[a-z]`  | |
| digits | `[0-9]`  | |
| not a number | `[^0-9]` | not a number |
|              | `^`     | beginning of line|
|             | `$`      | end of line |
| logical or | `(a`\|`b)` | a or b |

### More Quantifiers

| Quantifier | Meaning|
|---------|------------|
| `?`     | `0` or `1` |
| `+`     | `1` or more |
| `{x}`   | Exactly `x` |
| `{x,y}` | `x` to `y` |

### White Space

|Character|Meaning|
|---------|-------|
|`\t`|Tab|
|`\r`|Carriage return|
|`\n`|Line feed|
| `\s`|Any whitespace|

More: [Regex Quickstart Cheat Sheet](https://www.rexegg.com/regex-quickstart.html)

## Regex in VSCode

### Example

Find: ```(<bold>[0-9][0-9][0-9]</bold>)```

Replace: ```<center>$1</center>```

### Replace variables

* `$1, $2, ..., $n`
* `$&` means the whole matched string

### Capturing groups

(x) Matches 'x' and remembers the match, as the following example shows.
The parentheses are called capturing parentheses.

e.g.: `'bar foo'.replace(/(...) (...)/, '$2 $1')`

## Regex in .NET

* [.NET regular expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)

* [Quick Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)

## Regex in JavaScript

```js
let re1 = /ab+c/;
let re2 = new RegExp('ab+c');
const regex = RegExp('foo*');
const globalRegex = RegExp('foo*', 'g');

regexObj.test(str);

const str = 'hello world!';
const result = /^hello/.test(str);

var stringToGoIntoTheRegex = "abc";
var regex = new RegExp("#" + stringToGoIntoTheRegex + "#", "g");
```

### JavaScript Regex Resources

* [Regex Tester](https://www.regextester.com/)
* [MDN RegExp.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
* [MDN Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
