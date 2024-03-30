import React from 'react'

function Dots ({activeIndex, onClick, dataSlider}){
  return (
    <div className='all-dots'>
      {dataSlider.map((slide,index)=>(
        <span key={index} className={`${activeIndex==index? "dot active-dot" : "dot"}`} 
        onClick={() => onClick(index)}></span>
      ))}
    </div>
  )
}

export default Dots
