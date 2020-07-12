---
title: Loading Images using webpack and React
tags:
- Reactjs
- Webpack
- JavaScript
emoji: 🖼
link: https://github.com/survivejs/webpack-book/issues/80#issuecomment-216068406
---

## Loading a single image

```JSX
import React from 'react';
import heroImg from '../../assets/images/hero-img.png';


function HeroContainer() {
    return (
        <div>
        ...
                      <img className="hero-img" src={heroImg} alt="Hero Image" />
        ...
        </div>
```

## Loading images dynamically

```JSX
const thumbnails = require.context('../../assets/images/thumbnails', true);
...

function Component() {
...

  const cards = cardsData.map((card) => (
    <React.Fragment key={card.id} >
...
              <img
                className="card-img-top"
                src={thumbnails(`./${projCard.id}.jpg`).default}
              />
...
    </React.Fragment>
  ));

...
  return (
      <div className="some-class">
        {cards}
      </div>
      ...
  );
}
export default Component;
```

## Getting all images from a folder

### Create object with images from a folder

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

#### Filter the object and get only the images we need

## Webpack require.context Notes

* We can't pass a variable to the function as because it must be statically analyzable.

Source: [webpack issue #4772](https://github.com/webpack/webpack/issues/4772)
