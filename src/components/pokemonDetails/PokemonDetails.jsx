
import { useParams } from "react-router-dom";
import './pokemondetails.css';
import usePokemonDetail from "../../hooks/usePokemonDetail";
function PokemonDetails({ pokemonName }){
const  {id}=useParams();
const[pokemon]=usePokemonDetail(id,pokemonName);


    return(
        <div className="pokemon-details-wrapper">


<img  className="pokemon-image" src={pokemon.image} alt="" />
<div className="pokemon-name">name : <span>{pokemon.name}</span></div>
<div>height: {pokemon.height}</div>
<div>weight : {pokemon.weight}</div>
<div className="pokemon-types">
    {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}
</div>

{
    pokemon.types && pokemon. similarPokemons &&  //if in pokemon their types and similarPokemons exist so map and return
    <div>
        more {pokemon.types[0]} type pokemons
        <ul>
            {pokemon.similarPokemons.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li> // always use key for uniqe like harr ke pokemon ka id unique hai
            )}
        </ul>
    </div>
}



        </div>

    );

}
export default PokemonDetails;