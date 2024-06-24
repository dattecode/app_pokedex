import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getAllPokemon } from "../utils/apiServices";
import PokemonsList from "../components/pokedex/PokemonsList";
import PageList from "../components/pokedex/PageList";
import pagination from "../utils/pagination";

const Pokedex = () => {
  // state Hooks
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  //pagination
  const { itemsInPage, lastPage, pagesCurrentBlock } = pagination(
    page,
    pokemons
  );

  const HandleChangePage = (page) => {
    if (page > lastPage) {
      page = lastPage;
    }
    if (page < 1) {
      page = 1;
    }
    setPage(page);
  };

  //apiData
  const getPokemons = async () => {
    try {
      const data = await getAllPokemon();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    }
  };

  //effect Hooks
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ScrollView>
      <PokemonsList pokemons={itemsInPage} />
      <PageList 
      HandleChangePage={HandleChangePage} 
      pages={pagesCurrentBlock} 
      page={page}
      lastPage={lastPage}
      />
    </ScrollView>
  );
};


export default Pokedex;
