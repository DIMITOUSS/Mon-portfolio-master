import React, { useState } from "react";
import "./contact.css";
import ImageTwitter from "../../image/twitter.png";
import ImageFacebook from "../../image/facebook.png";
import ImageInstagram from "../../image/instagram.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du message
    console.log("Nom et Prénom :", name);
    console.log("Email :", email);
    console.log("Message envoyé :", message);
    // Réinitialisation des champs après l'envoi
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Contactez-nous</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="chan">
            <label htmlFor="name"></label>
            <input className="in"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Entrez votre nom et prénom"
              required
            />
          </div>
          <div className="chan">
            <label htmlFor="email"></label>
            <input className="in"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className="chan">
            <label htmlFor="message"></label>
            <textarea className="in"
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows={4}
              cols={50}
              placeholder="Entrez votre message ici"
              required
            />
          </div>
          <div className="button">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
      <div className="logo-reso">
        <img src={ImageTwitter} alt="logo txitter"/>
        <img src={ImageFacebook} alt="logo txitter"/>
        <img src={ImageInstagram} alt="logo txitter"/>
      </div>
    </section>
    
  );
}

export default Contact;
