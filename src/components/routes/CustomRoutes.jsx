import { Routes,Route } from "react-router-dom";
import Pokedex from "../Pokedex/Pokedex";
import PokemonDetails from "../pokemonDetails/PokemonDetails";

//browser router pure ke pure app ke ander  react router enable kardeta hai
function CustomRoutes(){
return (
<Routes>
    <Route path="/" element={<Pokedex /> } />
    <Route path="/pokemon/:id" element={<PokemonDetails /> } />


</Routes>
);
}
export default CustomRoutes;