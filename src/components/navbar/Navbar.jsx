import './navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../../imagenes/logo_completo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className="logo">
                <img src={Logo}></img>
            </Link>
                <ul className='nav_links'>
                    <li>
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link to="/challenge">Challenge</Link>
                    </li>
                    <li>
                        <Link to="/our-work">Our work</Link>
                    </li>
                    <li>
                        <Link to ="/contact-us">Contact us</Link>
                    </li>
                </ul>
                <Link to="/donate"><button className="donate_btn">Donate</button></Link>
        </div>  
    </nav>
  )
}

export default Navbar
