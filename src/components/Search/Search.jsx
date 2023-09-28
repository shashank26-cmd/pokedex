import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({ updateSearchTerm }) {
const debounce=useDebounce((e) => updateSearchTerm(e.target.value))

  return (
    <div className='pokemon-wrapper'>
      <input
        id='pokemon-name-search'
        type="text"
        placeholder="Search Pokémon"
        onChange={debounce}
      />
    </div>
  );
}

export default Search;
