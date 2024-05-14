import './footer.css'
import React from 'react'
import Logo from "../../imagenes/logo_completo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <div className = "footer">
        <div className="footercont">
        <div className="logo-footer-container">
            <div className="footerlogo">
            <Link to="/"><img className="logo" src={Logo}></img></Link>
            </div>
            <div className="footertext">
                <p>Powering imagination through the seas.</p>
            </div>
        </div>
          <div className='social-media-container'>
            <a href="https://www.facebook.com/tecxotic" target="_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/tecxotic_/" target="_blank" class="fa fa-instagram"></a>
          </div>
          
          <div>
            <p>	&#169; 2023 Tecnológico de Monterrey. All rights reserved.</p>
        </div>
        </div>
     </div>
    </>
  )
}

export default Footer
