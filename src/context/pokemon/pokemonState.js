import React, { useReducer } from "react";
import axios from "axios";
import { PokemonContext } from "./pokemonContext";
import { pokemonReducer } from "./pokemonReducer";
import { GET_POKEMON } from "./type";

export const PokemonState = ({ children }) => {
  const initialState = {
    pokemon: [],
    pokemonData: [],
    searchField: "",
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const getPokemons = async (id) => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = await response.data.results;
    const poke = await data.map((el) =>
      fetch(el.url).then((res) => res.json())
    );
    const pokemons = await Promise.all(poke).then(data);

    dispatch({
      type: GET_POKEMON,
      payload: pokemons,
    });
  };

  const { pokemon } = state;

  return (
    <PokemonContext.Provider value={{ getPokemons, pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
