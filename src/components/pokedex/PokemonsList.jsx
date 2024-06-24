import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import PokeCard from "./PokeCard";

const PokemonsList = ({ pokemons }) => {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    setPokemonsList(pokemons);
  }, [pokemons]);

  return (
    <View>
      {pokemonsList.map((pokemon, i) => {
        return <PokeCard pokemonUrl={pokemon.url} key={i} />;
      })}
    </View>
  );
};

export default PokemonsList;
