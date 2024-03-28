import './about.css'
import Fundadores from '../../images/fundadores.jpeg'
import logoCompleto from '../../images/logo_img.png'
import waveLine from '../../images/wave_line.png'
import Medusas from '../../images/medusas.jpg'

const About = () => {
  return (
    <section>
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
        <img src={logoCompleto}></img>
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
      <div> 
        <h1>Meet the minds shaping an industry</h1>
        //Aqui va lo del carousel/card slider
      </div>

    </section>
  )
}

export default About
