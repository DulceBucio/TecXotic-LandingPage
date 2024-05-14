import './work.css'
import Submarine from '../../imagenes/submarine.png'
import SimpleSlider from '../../components/simpleslider/SimpleSlider'
import Sponsor from '../../imagenes/sponsor.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Work = () => {
  return (
    <main>
          <div className='intro-work'>
              <img src={Submarine} className='submarine-img'></img>
              <div  className ='intro-content'>
                <h1>Revolutionizing underwater exploration with innovative ROVs</h1>
                  <p className='parrafo1'>
                    Marine technology is the application of scientific, 
                    engineering and technical knowledge to understand and
                    make the best use of the marine environment. The use of 
                    remotely operated vehicles (ROVs) allow us to explore 
                    the ocean without actually being in the ocean. 
                  </p>
                  <p className='parrafo2'>
                    These underwater machines are capable of performing 
                    many tasks from helping to map ocean floors and 
                    coral reefs to inspecting and repairing subsea 
                    infrastructure.
                  </p>
            </div>
          </div>
      
      <div className='philosphy-content'>
        <div className='philosophy-text'>
          <p>Since its foundation, TecXotic has embraced a
            <font color="#48D5D6"> design philosophy</font> that emphasizes<font color="#48D5D6"> safety </font> and a
            <font color="#48D5D6"> Simple Modular Well-Done (SMW) methodology </font>.
          </p>
        </div>
        <div className= "container_bubbles">
          <div className='drop'>
            <div className='valores'>
              <h2>S</h2>
              <p>Designs must be as simple as
                possible. This reduces weight, 
                manufacturing complexity, and failure. A  design with fewer
                parts has a lower probability of errors, defects and failures.</p>
            </div>
          </div>
          <div className='drop'>
              <div className='valores'>
                <h2>M</h2>
                <p>A modular design provides the
                capability to make repairs, adjustments, and improvements to designs. Modularity requires the standardization of pieces,
                components, and assemblies.</p>
              </div>
          </div>
          <div className='drop'>
            <div className='valores'>
                <h2>W</h2>
                <p>It involves a focus on the quality of designs, 
                  drawings, specifications (documentation), and
                  manufacturing processes.</p>
            </div>
          </div>
      </div>
      </div>
      <div>
        <SimpleSlider />
      </div>
      <div className='invite-container'>
        <div className='invite-text'>
          <h1>Join the <font color ="#48D5D6">ROVolution</font>!</h1>
          <p>Support from donors like you is critical to develop underwater technology solutions. </p>
          <button><Link to="/contact-us"><font color="#0E2430"> Contact us </font></Link></button>
        </div>
        <img src={Sponsor}></img>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default Work
