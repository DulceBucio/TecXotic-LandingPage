import React from 'react'
import './popup.css'
import priceLogo from '../../imagenes/price_logo.png'
import calendarLogo from '../../imagenes/calendar_icon.png'

function Popup (props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
       <div className="popup-text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h4>Features</h4>
          <div className='features-container'>
            <ul>
              <li>{props.feature1}</li>
              <li>{props.feature2}</li>
              <li>{props.feature3}</li>
              <li>{props.feature4}</li>
            </ul>
          </div>
          <div className='line'></div>
          <div className='bottom-container'>
          <div className='price'>
            <img src={priceLogo}></img>
            <h4>{props.price}</h4>
          </div>
          <div className='date'>
            <img src={calendarLogo}></img>
            <h4>{props.year}</h4>
          </div>
       </div>
       </div>
       <div>
       <button className='close-btn' onClick={() => props.setTrigger(false)}><span aria-hidden="true">&times;</span></button>
       </div>
       
      </div>
    </div>
  ) : "";
}


export default Popup
