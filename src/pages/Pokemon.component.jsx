import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/pokemon/pokemonContext";
import "./pokemon.style.scss";

const Pokemon = ({ match }) => {
  const { pokemon } = useContext(PokemonContext);
  const { name } = match.params;

  const poke = pokemon.filter((poke) => poke.name === name);

  return (
    <div>
      <Link to="/" className="back">
        <button
          className="custom-button"
          style={{
            margin: "10px",
            backgroundColor: "#95dada",
            textDecoration: "none",
          }}
        >
          BACK TO POKEMON
        </button>
      </Link>

      {poke.map((el) => (
        <div key={el.id} className="pokemon-container">
          <div className="pokemon-text">
            <h1>{el.name}</h1>
            <div className="img-container">
              <img
                alt={el.name + " front_default"}
                src={el.sprites.front_default}
              />
              <img
                alt={el.name + " back_default"}
                src={el.sprites.back_default}
              />
              <img
                alt={el.name + " front_shiny"}
                src={el.sprites.front_shiny}
              />
              <img alt={el.name + " back_shiny"} src={el.sprites.back_shiny} />
            </div>
            <h4>TYPE : {el.types[0].type.name}</h4>

            <div className="list">
              <h4>STATS:</h4>
              <ul>
                <li>{el.stats[0].stat.name}</li>
                <li>{el.stats[0].base_stat}</li>
              </ul>
              <ul>
                <li>{el.stats[1].stat.name}</li>
                <li>{el.stats[1].base_stat}</li>
              </ul>
              <ul>
                <li>{el.stats[2].stat.name}</li>
                <li>{el.stats[2].base_stat}</li>
              </ul>
              <ul>
                <li>{el.stats[3].stat.name}</li>
                <li>{el.stats[3].base_stat}</li>
              </ul>
              <ul>
                <li>{el.stats[4].stat.name}</li>
                <li>{el.stats[4].base_stat}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Pokemon;
