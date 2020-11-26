import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/cardlist/cardlist.component";
import Scroll from "../components/scroll/Scroll";
import SearchBar from "../components/searchbar/searchbar.component";
import { PokemonContext } from "../context/pokemon/pokemonContext";

const Homepage = () => {
  const { getPokemons, pokemon } = useContext(PokemonContext);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);

  const handleChange = (el) => {
    setSearchField(el.target.value);
  };

  const filterPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <SearchBar placeholder="Search Pokemon" handleChange={handleChange} />
      <Scroll>
        <CardList pokemon={filterPokemon} />
      </Scroll>
    </div>
  );
};
export default Homepage;
