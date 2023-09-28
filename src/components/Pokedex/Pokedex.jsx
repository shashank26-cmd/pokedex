import { useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import './Pokedex.css'
import PokemonDetails from "../pokemonDetails/PokemonDetails"

function Pokedex (){
  const[searchTerm,setsearchTerm]=useState('')

  return (
    <div className="pokedex-wrapper">
       
        <Search updateSearchTerm={setsearchTerm}/>
      
      {(!searchTerm)?<PokemonList />:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}  
    </div>
  )
}

export default Pokedex