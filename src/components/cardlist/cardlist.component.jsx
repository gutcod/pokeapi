import React from "react";
import Card from "../card/card.component";
import "./cardlist.style.scss";

const CardList = ({ pokemon }) => {
  return (
    <div className="card-list">
      {pokemon.map((user) => {
        return <Card key={user.id} name={user.name} id={user.id} />;
      })}
    </div>
  );
};
export default CardList;
