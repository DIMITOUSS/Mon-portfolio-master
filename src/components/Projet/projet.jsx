import React from "react";
import "./projet.scss";

function projet({
  image,
  descriptionImage,
  title,
  description,
  competence,
  link,
  icons,
}) {
  return (
    <div className="conteneur">
      <div className="card">
        <img className="card-img" src={image} alt={descriptionImage} />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="competence">Compétence:</p>
        <p>{competence}</p>
        <p className="competence">Langues de Programmation:</p>
        <div className="icons">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`Icon ${index}`} />
          ))}
        </div>
        <a href={link}>Lien vers le projet</a>
      </div>
    </div>
  );
}

export default projet;
