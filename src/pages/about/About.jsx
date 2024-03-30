import './about.css'
import Fundadores from '../../images/fundadores.jpeg'
import logoCompleto from '../../images/logo_img.png'
import waveLine from '../../images/wave_line.png'
import MultiSlider from '../../components/MultiSlider'
import Number from '../../images/6.png'
import MultiSlider2 from '../../components/AwardsSlider'

const About = () => {
  return (
    <section className='about-container'>
      <div className='intro_container'>
      <div className='quote_container'>
        <h1>Who <font color="#05F1D7">cares</font>, always <font color="#05F1D7">wins</font></h1>
      </div>
      <div className= "container_bubbles">
          <div className='drop'>
            <div className='valores'>
              <h2>Mission</h2>
              <p>Students are expected to demonstrate that 
                they are not limited to educational input and 
                are encouraged to focus on the benefits of the process 
                of learning these competencies and not simply to “win” the competency.</p>
            </div>
          </div>
          <div className='drop'>
              <div className='valores'>
                <h2>Vision</h2>
                <p>TecXotic strongly believes that all human inventions should always 
                  be created under the philosophy “who cares wins” and with the purpose 
                  of improving the world</p>
              </div>
          </div>
          <div className='drop'>
            <div className='valores'>
                <h2>Objective</h2>
                <p>Challenge students to apply the physics, math, electronics, and engineering 
                  skills they are learning in the classroom to solve problems 
                  from the workplace.</p>
            </div>
          </div>
      </div>
      </div>
      
      <div className="container_history">
        <div className='container_pic'>
          <div id="img">
            <img src={Fundadores}></img>
          </div>
        </div>
        <div className='historia'>
          <h2>Since <font color="#05F1D7">2015</font>...</h2>
          <p>A group of mainly mechatronics, computer science and industrial engineering 
                hardworking students at Tecnológico de Monterrey Campus Cuernavaca founded 
                TecXotic. During their first year, they succeded in builiding a ROV that 
                could work perfectly under arctic conditions and perfom three tasks that 
                simulated the maintenance of an oil pipeline at the bottom of the sea. 
                As a result, the team was able to get to the final stage of the competition
                and win the Jugde's Choice Award. Ever since, TecXotic has had an outstanding 
                participation in the competition and  inspired STEM enthusiasts, but most importantly
                it has demonstrated that Mexico got talent and the world needs to know it.  </p>
        </div>
      </div>
      <div className='meaning_container'> 
        <div className='meaning_pic'>
          <img src={logoCompleto}></img>
        </div>
        <div className='text_right'>
          <h1>Origin of the word</h1>
          <h2>[Tec-xo-tic]</h2>
              <p> We were looking for a name related to our pre-hispanic history. 
                In Morelos, the prevailing language is Nahuatl, therefore we decided 
                to call our team TecXotic, since it refers to the Nahuatl word texotic that 
                means blue. This color can be related to many things, among water, which is 
                the place where our ROV carry out its missions. </p>
        </div>
      </div>
      <div className='carousel_container'> 
        <h1>Meet the minds shaping an industry</h1>
        <MultiSlider />
      </div>
      <div className='impact-container'>
          <div className='cifras-container'>
            <div className='cifras'>
              <h1>9</h1>
              <img src={waveLine}></img>
              <p><font color="#05F1D7">years</font> of making an impact</p>
            </div>
            <div className='cifras'>
              <h1>6</h1>
              <img src={waveLine}></img>
              <p><font color="#05F1D7">times</font> being an international winner</p>
            </div>
            <div className='cifras'>
              <h1>20</h1>
              <img src={waveLine}></img>
              <p><font color="#05F1D7">workshops</font> of STEM for young minds</p>
            </div>
          </div>
        </div>
        <div className='awards-container'>
          <div className='title-awards'>
            <div className='content-left'>
                <div className='number'>
                  <img src={Number}></img>
                </div>
                <div className='text-content-left'>
                  <p>YEARS OF</p>
                  <h1>Awards</h1>
                </div>
            </div>
            <div className='text-content-right'>
              <p>We have won 6 different awards 
                throughout the years, being recognized 
                for our team spirit, safety consciousness, 
                design and communication skills.</p>
            </div>
          </div>
          <MultiSlider2 />
        </div>
    </section>
  )
}

export default About
