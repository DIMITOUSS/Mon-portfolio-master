import React from "react";
import "./description.css";
import Image from "../../image/moi1.jpg";

function description() {
  return (
    <div className="box">
      <h2>À propos</h2>
      <div className="box-2">
        <div className="box-2-image">
          <img src={Image} alt="A computer with neon lights" />
        </div>
        <div className="box-2-texte">
          <p>
            Bonjour, je suis <strong>Riner</strong>, un passionné de
            technologie et développeur web. <br /> Avec une solide expérience
            dans la création d'interfaces web dynamiques et conviviales, <br />
            je m'efforce de donner vie aux idées grâce à un code propre et
            efficace. <br />
            Par le biais de mon portfolio, je vous invite à découvrir mes
            projets,
            <br /> où créativité, fonctionnalité et excellence technique se
            rencontrent <br />
            pour offrir des expériences numériques remarquables.
          </p>
        </div>
      </div>
    </div>
  );
}

export default description;
