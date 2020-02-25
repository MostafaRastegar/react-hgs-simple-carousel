# react-hgs-simple-carousel
A light and simple react carousel.(power by es6-simple-carousel)

### 1. Getting Started
* add SimpleCarousel from react-hgs-simple-carousel on your component.



```jsx
// ...
import SimpleCarousel from 'react-hgs-simple-carousel';

// optional
import 'es6-simple-carousel/dist/styles/custom.css',
//...
```
### 2. make config for your carousel
```jsx
// ...
import React from 'react';

//...
// on main function
const slideConfig = {
  threshold: 50,
  infinite: true,
  nav: true,
  dots: true,
  autoPlay: false,
  responsive: {
    0: {
      items: 1.5
    },
    560: {
      items: 3
    },
    760: {
      items: 2.5
    }
  }
};
// ....
```
### 3. use config on your component's body
```jsx
  <div class="container">
      <SimpleCarousel className="myCarousel" slideConfig={slideConfig}>
          <span className="slide">Slide 1</span>
          <span className="slide">Slide 2</span>
          <span className="slide">Slide 3</span>
          <span className="slide">Slide 4</span>
          <span className="slide">Slide 5</span>
          <span className="slide">Slide 6</span>
          <span className="slide">Slide 7</span>
      </SimpleCarousel>
  </div>

```


for EX:

```jsx
import React from 'react';
import SimpleCarousel from './components/slider';
import 'es6-simple-carousel/dist/styles/custom.css';

function App() {
  const slideConfig = {
    threshold: 50,
    infinite: true,
    nav: true,
    dots: true,
    autoPlay: false,
    responsive: {
      0: {
        items: 1.5
      },
      560: {
        items: 2.5
      },
      760: {
        items: 3
      }
    }
  };

  return (
    <div className="container">
      <SimpleCarousel className="myCarousel" slideConfig={slideConfig} >
          <span className="slide">Slide 1</span>
          <span className="slide">Slide 2</span>
          <span className="slide">Slide 3</span>
          <span className="slide">Slide 4</span>
          <span className="slide">Slide 5</span>
          <span className="slide">Slide 6</span>
          <span className="slide">Slide 7</span>
      </SimpleCarousel>
    </div>
  );
}
export default App;


```
