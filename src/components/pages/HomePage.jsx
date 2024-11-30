import React from "react";
import PropTypes from "prop-types";
import SideBar from "../submodules/SideBar";
import kutman from "../../assets/Photos/kutman.png";
import "./HomePage.css";


const Card = ({ imgSrc, altText, title, description }) => (
  <article className="card">
    <figure>
      <img src={imgSrc} alt={altText} loading="lazy" />
    </figure>
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
  </article>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


const HomePage = () => {
  const cards = React.useMemo(() => [
    {
      imgSrc: kutman,
      altText: "Kutman",
      title: "Mike's mindful morning",
      description: "Course • Mindful Mike",
    },
    {
      imgSrc: "https://assets.codepen.io/605876/person.png",
      altText: "Person",
      title: "John's journey to calm",
      description: "Course • Peaceful John",
    },
  ], []);

  
  return (
    <>
    <SideBar />
    <div className="homepage">
      <main className="main-content">
        <h1 className="page-title">HomePage</h1>
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
    </div>
    </>
  );
}

export default HomePage;
