import axios from "axios";


export const getAllPokemon = async() => {
  // total pokemons = 1302
  const totalPokemons = 1302;
  const testPokemons = 300;
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${testPokemons}`)
  return data.results
};

export const getAllTypes = async () => {
  const {data} = await axios.get("https://pokeapi.co/api/v2/type")
  return data.results
}

export const getPokemonByType = async (type) => {
  const url_type = `https://pokeapi.co/api/v2/type/${type}/`
  const { data } = await axios.get(url_type)
  return data.pokemon
}

export const getPokemonById = async (id) => {
  const url_pokemon = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const { data } = await axios.get(url_pokemon)
  return data
}

export const getDataByUrl = async (url) => {
  const { data } = await axios.get(url)
  return data
}

