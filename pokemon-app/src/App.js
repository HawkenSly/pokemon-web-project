import './App.css';
import PokemonGrid from './PokemonGrid'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

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
      <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
    </QueryClientProvider>
  );
}



export default App;