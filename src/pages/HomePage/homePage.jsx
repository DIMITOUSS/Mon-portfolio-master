import React from "react";
import "./homePage.scss";
import Banner from "../../components/Banner/banner.jsx";
import Description from "../../components/Description/description.jsx";
import Projet from "../../components/Projet/projet.jsx";
import Contact from "../../components/Comtact/contact.jsx"
import cardData from "../../Datas/cardData.json";

import projet1 from "../../image/sophie-bluel.png";
import projet2 from "../../image/kasa.png";
import projet3 from "../../image/argentbank.png";

import icon1 from "../../image/icon1.png";
import icon2 from "../../image/icon2.png";
import icon3 from "../../image/icon3.png";
import icon4 from "../../image/icon4.png";

function homePage() {
  const imageData = {
    "sophie-bluel.png": projet1,
    "kasa.png": projet2,
    "argentbank.png": projet3,
  };
  const iconData = {
    "icon1.png": icon1,
    "icon2.png": icon2,
    "icon3.png": icon3,
    "icon4.png": icon4,
  };
  return (
    <div>
      <Banner />
      <div id="about"> </div>
      <Description />
      <section className="cardP" >
        <h2 className="cardP-section-title" id="projects">Projets</h2>
        <div className="cardP-data">
          {cardData.map((data) => (
            <Projet 
              key={data.id}
              image={imageData[data.image]}
              descriptionImage={data.descriptionImage}
              title={data.title}
              description={data.description}
              competence={data.competence}
              link={data.link}
              icons={data.icons.map((icon) => iconData[icon])}
            />
          ))}
        </div>
      </section>
      <div id="contact"></div>
      <Contact/>
    </div>
  );
}

export default homePage;
