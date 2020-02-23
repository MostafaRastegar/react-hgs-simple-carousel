import React, { useEffect } from 'react';
import { Slider } from 'es6-simple-carousel';
import 'es6-simple-carousel/dist/styles/slider.css';

function SimpleSlider(props) {
  const { className, children,slideConfig,refrence } = props;
  useEffect(() => {
    // console.log('salam');
    new Slider({
        slider:refrence.current,
        ...slideConfig
      }
    );
  }, [className, refrence, slideConfig]);

  return (
    <div className={`slider${!!className ? ` ${className}` : ''}`} ref={refrence}>
      <div className="wrapper">
        <div className="slides">
          {children}
        </div>
      </div>
    </div>
  );
}
export default SimpleSlider;
