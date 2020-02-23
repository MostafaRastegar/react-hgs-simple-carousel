import React, { useEffect } from 'react';
import {Slider} from '../../es6-simple-carousel/dist/index.es';
import '../../es6-simple-carousel/src/styles/custom.css';
import '../../es6-simple-carousel/src/styles/slider.css';

function Slider(props) {
  const {slideConfig} = props;  
  useEffect(() => {
    new Slider(slideConfig);
  }, [slideConfig]);
}

export default Slider;
