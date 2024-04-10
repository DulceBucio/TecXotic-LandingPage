import React from 'react'
import image from '../../imagenes/pool2.avif'
import WaterWave from "react-water-wave";
import {Link} from 'react-router-dom'
import './home.css'
  
  const Home = (props) => {
    
    return (
        <WaterWave imageUrl={image}>
        {() => (
          <div className='container-water'>
                <div className='container-water-text'>
                    <h1 >Powering imagination through the seas</h1>
                    <button><Link to="/about-us"><font color ="#0E2430">Read More</font></Link></button>
                </div>
          </div>
        )}
      </WaterWave>
    );
  };
  
  export default Home;

