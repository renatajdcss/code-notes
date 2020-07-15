---
title: React Hooks
tags:
- Reactjs
- React-hooks
emoji: 🎣
link: 
---

## React useEffect

React’s useEffect hook can be used as a replacement for the following class-based methods: componentDidMount, componentDidUpdate, and componentWillUnmount.

```js
  useEffect(() => {
      ...
  }, []);
```

* useEffect will run after every single render unless you provide the last array argument
* this last argument is the array of values that the effect depends on.

## React useState

Returns a stateful value, and a function to update it.

`const [state, setState] = useState(initialState);`

## Rules of Hooks

```note
Don’t call Hooks from regular JavaScript functions.
Instead, you can:

    ✅ Call Hooks from React function components.
    ✅ Call Hooks from custom Hooks.
```

There's an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules which  is included by default in [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

## References

* [React's Hook API reference](https://reactjs.org/docs/hooks-reference.html#useeffect)
* [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
* [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
* [Data fetch sample](https://codesandbox.io/s/jvvkoo8pq3)