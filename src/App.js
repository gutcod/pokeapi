import React from "react";
import { Route, Switch } from "react-router-dom";
import { PokemonState } from "./context/pokemon/pokemonState";

import Homepage from "./pages/Homepage.component";
import Pokemon from "./pages/Pokemon.component";

function App() {
  return (
    <PokemonState>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/pokemon/:name" component={Pokemon} />
      </Switch>
    </PokemonState>
  );
}

export default App;
