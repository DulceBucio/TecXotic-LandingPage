import './awardslider.css'
import Premio1 from '../../imagenes/premio1.jpg'
import Premio2 from '../../imagenes/premio2.jpg'
import Premio3 from '../../imagenes/premio3.jpg'
import Premio4 from '../../imagenes/premio4.jpg'
import Premio5 from '../../imagenes/premio5.jpg'
import Premio6 from '../../imagenes/premio6.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AwardSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      };
      return (
        <>
          <div className='carousel'>
            <Slider {...settings}>
              <div className='box'>
                  <img src={Premio1}className='prize-pic' ></img>
                  <div className='info'>
                    <h2>2016</h2>
                    <h3>Judge’s Choice Award</h3>
                  </div>
              </div>
              <div className='box'>
             
                  <img src={Premio2} className='prize-pic'></img>
                  <div className='info'>
                    <h2>2017</h2>
                    <h3>Most Valuable Person (MVP)</h3>
                  </div>
                
              </div>
              <div className='box'>
                <img src={Premio3} className='prize-pic'></img>
                <div className='info'>
                  <h2>2019</h2>
                  <h3>Safety conscious</h3>
                </div>
              </div>
              <div className='box'>
                  <img src={Premio4} className='prize-pic'></img>
                  <div className='info'>
                    <h2>2021</h2>
                    <h3>3rd place overall engineering presentation champion </h3>
                  </div>
              </div>
              <div className='box'>
                  <img src={Premio5} className='prize-pic'></img>
                  <div className='info'>
                    <h2>2022</h2>
                    <h3> Team spirit</h3>
                    <h3> Ocean exploration video challenge </h3>
                  </div>
              </div>
              <div className='box'>
                  <img src={Premio6} className='prize-pic'></img>
                  <div className='info'>
                    <h2>2023</h2>
                    <h3>Engineering presentation MVP</h3>
                  </div>
              </div>
            </Slider>
          </div>
        </>
  )
}

export default AwardSlider
