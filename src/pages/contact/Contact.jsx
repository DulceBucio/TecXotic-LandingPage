import "./contact.css";
import phoneIcon from '../../imagenes/phone_icon.png'
import mailIcon from '../../imagenes/mail_icon.png'
import Footer from '../../components/footer/Footer'
import React from "react";

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando ...");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7cea15b-9c47-41c3-8cf4-d9baa25e351c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Registro exitoso!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <main className="mainc">
      <div className="contact">
        <div className="contact-col-left">
          <h3>Let's talk!</h3>
          <p>Feel free to reach out through contact form or find our contact from the information below. Your questions are important to us and we would love to collaborate with you.</p>
          <ul>
            <li><img src={mailIcon} /> <a href= "mailto:tecxotic21@gmail.com">tecxotic21@gmail.com</a></li>
            <li><img src={phoneIcon} /><a href="tel:+524424683576" /> 777 518 3053</li>   
            <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.797822485821!2d-99.22360982463766!3d18.80716136035692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd819736a4029%3A0xeaee3fb10b32a22c!2sTecnol%C3%B3gico%20de%20Monterrey%20Campus%20Cuernavaca!5e0!3m2!1ses!2smx!4v1714014385896!5m2!1ses!2smx" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
          </ul>
        </div>
        <div className="contact-col-right">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" id="input-name" required/>
          <label>Email address</label>
          <input type="text" name="email" placeholder="Enter your email address" required/>
          <label>Phone number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          
          <button type="submit" className="btn-submitt">Submit</button>
        </form>
        <span>{result}</span>
      </div>
      </div>
      
      <div>
       <Footer />
      </div>

    </main>
  );
};

export default Contact;
