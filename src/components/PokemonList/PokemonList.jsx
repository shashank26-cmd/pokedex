
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList  from "../../hooks/usePokemonList";


function PokemonList() {

  const [ pokemonisState,setpokemonlisState ]=usePokemonList(false);
  // State for storing Pokémon data and loading status
  // const [PokemonList, setPokemonList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // API URL for the PokeAPI
  // const[PokedexURL,setPokedexURL] =useState( ' https://pokeapi.co/api/v2/pokemon');

//   const[nextUrl,setNextUrl]=useState('');
// const[prevUrl,setPrevUrl]=useState('');
  // Function to download Pokémon data

  //instead of 5 variable make one object
  // const[pokemonisState,setpokemonlisState]=useState({
  //   PokemonList:[],
  //   isLoading:true,
  //   PokedexURL:' https://pokeapi.co/api/v2/pokemon',
  //   nextUrl:'',
  //   prevUrl:''
  // });
  // async function downloadPokemons() {


// .. ke through key value pair unlock and  then isLoading ko overirde;
// passing (state)variable as a call back so har set fn par update hoygi info and last mai final value return and if (call back pass nhi kiya)so same state ko ek jagah update kiya and next bar wapis call kiya to woh start se like zero se update hona start karegi pichla upgrade se nhi start wale state pe update hogi therefore no use
// setpokemonlisState((state)=>({...state,isLoading:true}));

      // Fetch the list of 20 Pokémon from the API
      // const response = await axios.get(pokemonisState.PokedexURL);
      // const pokemonResults = response.data.results; // we get the arr of pokemons from results and unki detail nikalne ke liye url hai
// console.log(pokemonResults);

// update next url and prev url from api and at while clickinng button update url with next or prev and load  new set of pokemons and hence we are targetinng url at use effect when next  or prev url change use effect will call again so next or prev data will get load as a current data and new state of next and prev will be stored at sate variable.

// setpokemonlisState((state)=>({...state,
//   nextUrl:response.data.next,
//   prevUrl:response.data.previous
// }));


      // Create an array of promises to fetch detailed Pokémon data
    //Imagine you're ordering food from a restaurant. You place orders for multiple dishes. Instead of waiting at the restaurant for each dish to be prepared, you ask for a promise (like a receipt) for each dish. Then, you leave the restaurant and do other things while the dishes are being cooked. Once each dish is ready (fulfilled promise), you collect them all and enjoy your complete meal.
//pokemonResultPromises is like those promises (receipts) for each Pokémon's detailed data.
//await axios.all(pokemonResultPromises) is like waiting until all the promises (dishes) are ready.
///pokemonData is like your complete meal, containing all the detailed Pokémon data.




//       const pokemonResultPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url)); // iterating and using their url
//       const pokemonData = await axios.all(pokemonResultPromises); // arr of 20 pokemon detailed data
// console.log(pokemonData);
      // Extract relevant information for each Pokémon

// It uses promises because fetching data from a web server is an asynchronous operation, meaning it takes some time to complete. If you were to store the data directly into an array without using promises, your code might not wait for all the data to be fetched, and you could end up with incomplete data.


//pokemonData.map(...) - This part starts a loop over each detailed Pokémon data in the pokemonData array.

//const pokemon = pokeData.data; - It extracts the specific Pokémon data from the current iteration and assigns it to a variable named pokemon. This makes it easier to work with the data.

//return {...} - It creates an object that represents a Pokémon with the following properties:



// const pokeListResult = pokemonData.map((pokeData) => {
//         const pokemon = pokeData.data;
//         return {
//           id: pokemon.id,
//           name: pokemon.name,
//           // Use the dream world image if available, otherwise use the shiny image
//           image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
//           types: pokemon.types
//         }
//       });
// console.log(pokeListResult);
//       // Update the component state with the Pokémon list and mark loading as complete
// setpokemonlisState((state)=>({...state,
//   PokemonList:pokeListResult,
//   isLoading:false
// }));
//   }

  // // Use useEffect to trigger the data download when the component mounts
  // useEffect(() => {
  //   downloadPokemons();
  // }, [pokemonisState.PokedexURL]);

  return (
    
      <div className="pokemon-list-wrapper">
        <div className="l">Pokemon List</div>
        <div className="pokemon-wrapper">
        {(pokemonisState.isLoading) ? 'Loading...' :
         pokemonisState.PokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
        }</div>
        <div className="control">
          <button disabled={pokemonisState.prevUrl==null} onClick={()=> setpokemonlisState({...pokemonisState,PokedexURL:pokemonisState.prevUrl})}>prev</button>
          <button disabled={pokemonisState.nextUrl==null} onClick={()=>setpokemonlisState({...pokemonisState,PokedexURL:pokemonisState.nextUrl})}>next</button>

        </div>
      </div>

  )
}

export default PokemonList;
