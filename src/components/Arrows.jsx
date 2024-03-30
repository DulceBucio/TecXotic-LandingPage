import React from 'react'
import nextBtn from '../images/BotonNext.png'
import backBtn from '../images/BotonBack.png'

function Arrows ({prevSlide, nextSlide}) {
  return (
    <div className='arrows'>
      <span className='prev' onClick={prevSlide}>
        <img src={backBtn} className='btn-back'></img>
      </span>
      <span className='next' onClick={nextSlide}>
        <img src={nextBtn}className='btn-next' ></img>
      </span>
    </div>
    
  )
}

export default Arrows
