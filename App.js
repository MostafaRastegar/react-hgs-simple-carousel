import React, { useEffect,useRef } from 'react';
import SimpleSlider from './components/slider';
import 'es6-simple-carousel/dist/styles/custom.css';

function App() {
  const inputEl = useRef(null);
  const slideConfig = {
    // slider: document.querySelector(`.${className}`),
    // slider: document.querySelector(`.mainSlider`),
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

  return (
    <div className="container">
      <SimpleSlider className="mainSlider" slideConfig={slideConfig} refrence={inputEl} >
          <span className="slide">Slide 1</span>
          <span className="slide">Slide 2</span>
          <span className="slide">Slide 3</span>
          <span className="slide">Slide 4</span>
          <span className="slide">Slide 5</span>
          <span className="slide">Slide 6</span>
          <span className="slide">Slide 7</span>
      </SimpleSlider>
    </div>
  );
}
export default App;
