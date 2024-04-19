import "./contact.css";
import insta from "../../imagenes/instagram_icono.png";
import arroba from "../../imagenes/arroba_icono.png";

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
          <p>tecxotic_</p>
        </div>
        <div className="drop">
          <img className="arrobalogo" src={arroba}></img>
          <p>tecxotic21@gmail.com</p>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Contact;
