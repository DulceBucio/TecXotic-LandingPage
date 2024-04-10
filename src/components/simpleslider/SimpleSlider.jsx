import React, { useEffect, useRef, useState } from 'react'
import './simpleslider.css'
import { data } from './data';
import nextBtn from '../../imagenes/BotonNext.png'
import prevBtn from '../../imagenes/BotonBack.png'
import MoreInfo from '../../imagenes/MoreInfo.svg'
import Popup from './Popup';

const SimpleSlider = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    
    useEffect(() => {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("div > img")[currentIndex];
  
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth"
        });
      }

    }, [currentIndex]);

    const scrollToImage = (direction) => {
      if (direction === 'prev') {
        setCurrentIndex(curr => {
          const isFirstSlide = currentIndex === 0;
          return isFirstSlide ? 0 : curr - 1;
        })
      } else {
        const isLastSlide = currentIndex === data.length - 1;
        if (!isLastSlide) {
          setCurrentIndex(curr => curr + 1);
        }
      }
    }
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    }
  
    return (
      <div className="main-container">
        <div className="slider-container">
          <div className='leftArrow' onClick={() => scrollToImage('prev')}><img src={prevBtn}></img></div>
          <div className='rightArrow' onClick={() => scrollToImage('next')}><img src={nextBtn}></img></div>
          <button className='btn-more' onClick={() => setButtonPopup (true)}><img src={MoreInfo} /></button>
          <div className="container-images">
            <div ref={listRef}>
              {
                data.map((item) => {
                  return <div key={item.id} className='slide-image' >
                      <img src={process.env.PUBLIC_URL + `/Rov/rov${item.id}.jpg`}/> 
                  </div>
                })
              }
            </div>
            <Popup trigger ={buttonPopup}  setTrigger ={setButtonPopup} >
              <h2>{data[currentIndex].title}</h2>
            </Popup>  
          </div>
          <div className="dots-container">
              {
                data.map((_, idx) => (
                  <div key={idx}
                    className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(idx)}><input type="radio"></input></div>))
              }
          </div>
          
        </div>
      </div>
  )
}

export default SimpleSlider
