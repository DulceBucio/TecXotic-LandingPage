import './MultiSlider.css'
import David from '../images/submarine_david.png'
import Charly from '../images/submarine_charly.png'
import Ricardo from '../images/submarine_ricardo.png'
import Atoany from '../images/submarine_atoanny.png'
import Dulce from '../images/submarine_dulce.png'
import Leslie from '../images/submarine_leslie.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MultiSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      };
      return (
        <section>
          <div className='carousel'>
            <Slider {...settings}>
              <div className='box'>
           
                  <img src={David}className='profile-pic' ></img>
                  <div className='info'>
                    <h2>David García</h2>
                    <h3>Mentor</h3>
                  </div>
               
              </div>
              <div className='box'>
             
                  <img src={Ricardo} className='profile-pic'></img>
                  <div className='info'>
                    <h2>Ricardo Valera</h2>
                    <h3>Mentor</h3>
                  </div>
                
              </div>
              <div className='box'>
                <img src={Charly} className='profile-pic'></img>
                <div className='info'>
                  <h2>Carlos Beltrán</h2>
                  <h3>Mentor</h3>
                </div>
              </div>
              <div className='box'>
                  <img src={Atoany} className='profile-pic'></img>
                  <div className='info'>
                    <h2>Atoany Fierro</h2>
                    <h3>Mentor</h3>
                  </div>
              </div>
              <div className='box'>
                  <img src={Dulce} className='profile-pic'></img>
                  <div className='info'>
                    <h2>Dulce Bucio</h2>
                    <h3>Software Leader</h3>
                  </div>
              </div>
              <div className='box'>
                  <img src={Leslie} className='profile-pic'></img>
                  <div className='info'>
                    <h2>Leslie Flores</h2>
                    <h3>Corporate Responsibility</h3>
                  </div>
              </div>
            </Slider>
          </div>
        </section>
  )
}

export default MultiSlider
