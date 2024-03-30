import React, { useState, useEffect } from 'react';
import dataSlider from './dataSlider'
import Dots from './Dots'
import Arrows from './Arrows'
import SliderContent from './SliderContent'

const len = dataSlider.length -1;

function Carousel (props){
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval (() => { setActiveIndex(activeIndex=== len ? 0 :activeIndex +1);}, 5000);
    return () => clearInterval(interval);},[activeIndex]);

  return (
    <div className='carousel-container'>
      <SliderContent activeIndex={activeIndex} dataSlider={dataSlider} />
      <Arrows
        prevSlide = {() => setActiveIndex(activeIndex < 1 ? len: activeIndex - 1)}
        nextSlide = {() => setActiveIndex(activeIndex == len ? 0: activeIndex + 1)}
      />
      <Dots
        activeIndex={activeIndex}
        dataSlider={dataSlider}
        onClick={(activeIndex)=> setActiveIndex(activeIndex)}
      />
    </div>
  )
}

export default Carousel;