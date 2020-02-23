# react-owl-carousel  [![npm version](https://img.shields.io/npm/v/react-owl-carousel.svg?style=flat)](https://www.npmjs.com/package/react-owl-carousel)
[React](http://facebook.github.io/react/) + [Owl Carousel 2.3](https://owlcarousel2.github.io/OwlCarousel2/)

### 1. Getting Started

* You need to inject a global window.jQuery first.

e.g. webpack

```js
// ...
plugins: [
    // other plugins,
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
],
//...
```

you can use html script tag to inject jquery as well.

### 2. Set up your component
add owl-carousel config to owlCarousel function.
for use more option please read owlcarousel docs
[Owl Carousel 2.3](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)

```jsx
import React from 'react';
import owlCarousel from 'react-hgs-owl-carousel';
// optional
import 'owl.carousel/dist/assets/owl.theme.default.css';
// ....
```

for use     
    next,
    prev,
    to,
    destroy,
    play,
    stop,
    changed,
    change,
    refresh,
    replace,
    add,
    remove
events, just you import from owlCarousel(config);
for other events you can add event to config constant;

for EX:

```jsx
// id "demo" is optional
const MainSlider = () => {
  const config = {
    id: 'demo',
    options: {
      loop: true,
      margin: 10,
      nav: true,
      rtl: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      },
      onDragged: () => console.log('onDragged'),
      onInitialize: () => console.log('initialize'),
      onInitialized: () => console.log('initialized'),
      onResize: () => console.log('onResize'),
      onTranslate: () => console.log('onTranslate'),
      onTranslated: () => console.log('onTranslated'),
    },
  };

  const { Slider, prev, add, next} = owlCarousel(config);

  return (
    <div>
      <Slider>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        <div className="item"><h4>7</h4></div>
        <div className="item"><h4>8</h4></div>
        <div className="item"><h4>9</h4></div>
        <div className="item"><h4>10</h4></div>
        <div className="item"><h4>11</h4></div>
        <div className="item"><h4>12</h4></div>
      </Slider>
      <button onClick={() =>{add('<div class="item"><h4>new Item</h4></div>',1)}}>add item</button>
      <button onClick={() => prev(1000)}>custon prev</button>
      <button onClick={() =>{next(1000)}}>custom next</button>
    </div>
  )
}
```
