---
title: Regular Expressions
tags:
- regex
emoji: 
link: 
---
## Character type/quantity in Regex

| Type | Regex  | Meaning |
| ------------ | ------ | -------------|
| 1 char       | `.`     | any character|
| 0 to infintiy   | `.*`     | 0 or more occurrences of regular exp directly preceeding it|
| lowercase letters | `[a-z]`  | |
| digits | `[0-9]`  | |
| not a number | `[^0-9]` | not a number |
|              | `^`     | beginning of line|
|             | `$`      | end of line |
|             | `(a|b)` | a OR b|

### No of Chars

| `?`| `0` or `1` |
| ----- | --------- |
| `+`     | `1` or more |
| `{x}`   | amount =`x` |
| `{x,y}` | `x` to `y` |

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
```

* [Regex Tester](https://www.regextester.com/)
* [MDN Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
