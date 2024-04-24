import "./contact.css";
import insta from "../../images/instagram_icono.png";
import arroba from "../../images/arroba_icono.png";
import Logo from "../../images/logo_completo.png";
import logoarroba from "../../images/arrobablanco.png";
import logoinsta from "../../images/instablanco.png";

const Contact = () => {
  return (
    <main className="mainc">
      <div className="titleC">
        <p>
          <b>Contact Us</b>
        </p>
      </div>
      <div className="textC">
        <p>...So that you can also be part of this world of engineering</p>
      </div>

      <div className="containerC">
        <div className="drop">
          <img className="instalogo" src={insta}></img>
          <p>
            <a href="https://www.instagram.com/tecxotic_?igsh=bDc2bmQ5bHFmMG9l" target="_blank">tecxotic_</a>
          </p>
        </div>
        <div className="drop">
          <img className="arrobalogo" src={arroba}></img>
          <p>
            <a href= "mailto:tecxotic21@gmail.com">tecxotic21@gmail.com</a>
          </p>
        </div>
        <div></div>
      </div>

      <div className="footer">
        <div className="footercont">
          <div className="footerlogo">
            <img className="logo" src={Logo}></img>
          </div>
          <div className="footertext">
            <p>Exploring the oceans through engineering</p>
          </div>
          <img className="logoarroba" src={logoarroba}></img>
          <img className="logoinsta" src={logoinsta}></img>
        </div>
      </div>
    </main>
  );
};

export default Contact;
