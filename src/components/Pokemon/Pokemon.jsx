 import './pokemon.css';
import { Link } from "react-router-dom";


 function Pokemon({ name, image,id }) {
  return (
    <div className='pokemon'>

<Link to={`/pokemon/${id}`}>
      <div className='pokemon-name'>{name}</div>
      <div><img className='pokemon-image' src={image} alt={name} /></div>
    
      </Link>  
    </div>
  // click on img or name new file will get  open like href click here and pass to pokkemon details and from there pass to  use pokemon details and there first load the id given pokemon and then base on the id load similar pokemons and then return and print at screen this is the part of custom hooks
  );
}
export default Pokemon;