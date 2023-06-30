import './App.css';
import pokeball from './pokeball.svg';
import PokemonGrid from './PokemonGrid'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useQuery } from 'react-query';

const queryClient = new QueryClient();

async function getPokemonFromGeneration() {
  const generationPokemon = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let data = await response.json();
    generationPokemon.push(data);
  }

  return generationPokemon;
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>Pokemon App</h1>
          <div>

          </div>
          <div>
            <PokemonGrid />
          </div>
        </header>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}



export default App;