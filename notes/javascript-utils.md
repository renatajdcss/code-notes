---
title: Vanila Javascript and Lodash Array/Object Useful Methods
tags:
- JavaScript
- lodash
emoji: 🛠
link: 
---

## New array with unique values (remove duplicates)

```javascript
const uniqueArray = [...new Set(arrayWithDupes)];
```

## Search Object

```javascript
let filtered = arrayToFilter.filter(element => element.property.includes("something"));
```

## Filter Object by key using lodash

```javascript
const filteredObject = pickBy(sourceObject, (value, key) => (key.toLowerCase()).includes('filter'));
```

## Iterate Object keys

>_Note:_ In Javascript, Objects `{}`, don't have the method `.map()`, it's only for Arrays `[]`.

```js
// ES way
Object.keys(data).map(item => {...});
Object.keys(data).forEach(item => {...});
```

Object.keys is used to create an array from object keys, more info from
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).


## Other Useful Resources

* [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [Map, Reduce, Filter examples](https://www.freecodecamp.org/news/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f/)
* [Lodash docs](https://lodash.com/docs/4.17.15)
