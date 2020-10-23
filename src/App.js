import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Dashboard from './Components/Layout/Dashboard';
import PokeNavBar from './Components/Layout/PokeNavbar';


function App() {
  return (
    <div className="App">
      <PokeNavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
