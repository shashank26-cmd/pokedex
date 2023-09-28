import { Link } from "react-router-dom"
import './App.css';
import CustomRoutes from './components/routes/CustomRoutes';

function App() {
 return(
 <div className="outer-index">
  <h1 id="pokedex-heading">
    <Link to="/"> Pokedex</Link>
    </h1>
 <CustomRoutes/>
  </div>
 )
}

export default App
