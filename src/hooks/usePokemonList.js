import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
  const [pokemonisState, setpokemonlisState] = useState({
    PokemonList: [],
    isLoading: true,
    PokedexURL: ' https://pokeapi.co/api/v2/pokemon',
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadPokemons() {
   


      setpokemonlisState((state) => ({ ...state, isLoading: true }));
      const response = await axios.get(pokemonisState.PokedexURL);
      const pokemonResults = response.data.results;
      console.log(pokemonResults);
      setpokemonlisState((state) => ({
        ...state,
        nextUrl: response.data.next,
        prevUrl: response.data.previous
      }));
      const pokemonResultPromises = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonResultPromises);
    console.log(pokemonData);
    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types
      };
    });
    console.log(pokeListResult);
    setpokemonlisState((state) => ({
      ...state,
      PokemonList: pokeListResult,
      isLoading: false
    }));
  
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokemonisState.PokedexURL]);

  return [ pokemonisState, setpokemonlisState ];
}

export default usePokemonList;
