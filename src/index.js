import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Slider } from "es6-simple-carousel";
import "es6-simple-carousel/dist/styles/slider.css";

function SimpleCarousel(props) {
  const { className, children, slideConfig } = props;
  const refrence = useRef();
  useEffect(() => {
    new Slider({
      slider: refrence.current,
      ...slideConfig
    });
  }, []);

  return (
      <div className={`slider ${className}`} ref={refrence}>
        <div className="wrapper">
          <div className="slides">{children}</div>
        </div>
      </div>
  );
}
SimpleCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired
};
SimpleCarousel.defaultProps = {
  className: ""
};
export default SimpleCarousel;
