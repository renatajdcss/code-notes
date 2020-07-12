---
title: Loading Images using webpack and React
tags:
- Reactjs
- Webpack
- JavaScript
emoji: 🖼
link: https://github.com/survivejs/webpack-book/issues/80#issuecomment-216068406
---

## Create object with images from a folder

```javascript
  const mapProjectImgs = (context) => {
    let keys = context.keys();
    let values = keys.map(context);
    return keys.reduce((accumulator, key, index) => ({ ...accumulator, [key]: values[index],
    }), {});
  };

  const projectImgs = mapProjectImgs(require.context('../../assets/images', true, /\.(png|gif|jpg|jpeg)$/))
```

`projectImgs` will return an object similar to:

```javascript
{
  "./3DPrint/3DPrint1.png": {
    "default": "112fad6d624867b347569ac2632778e5.png"
  },
  "./3DPrint/3DPrint10.png": {
    "default": "1ee0ad0c83a407ee592f1e105e55e44a.png"
  },
...
}
```

## Webpack require.context Notes

* We can't pass a variable to the function as because it must be statically analyzable.

Source: [webpack issue #4772](https://github.com/webpack/webpack/issues/4772)
