import React from 'react'

function SliderContent ({activeIndex, dataSlider}) {
  return (
    <section>
      {dataSlider.map((slide,index)=>(
        <div key={index} className={index === activeIndex ? "slides active": "inactive"}>
            <img className='slide-image' src={slide.urls}></img>
            <h2 className='slide-title'>{slide.title}</h2>
            <h3 className='slide-text'>{slide.description}</h3>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
