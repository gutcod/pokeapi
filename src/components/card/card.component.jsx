import React from "react";
import { Link } from "react-router-dom";
import "./card.style.scss";

const Card = ({ name, id, url }) => {
  return (
    <div className="card-container">
      <img
        alt={name}
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        className="card-img"
      />
      <h1>{name}</h1>{" "}
      <Link to={"/pokemon/" + name} className="cardlink">
        <button className="custom-button">Open</button>
      </Link>
    </div>
  );
};

export default Card;
