import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Dashboard from './Components/Layout/Dashboard';
import PokemonSearch from './Components/Layout/PokemonSearch';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <div className="container">
      </div>
    </div>
  );
}

export default App;
