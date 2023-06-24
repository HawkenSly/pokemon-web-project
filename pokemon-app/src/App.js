import './App.css'; 
import PokemonCapsule from './Capsule'

async function getGeneration(gen) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
  let data = await response.json()
  return data;
}

getGeneration('kanto').then(data => console.log(data));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
        <div>
          <PokemonCapsule/>
        </div>
      </header>
    </div>
  );
}



export default App;
