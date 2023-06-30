import * as React from 'react';
import { useQuery } from 'react-query';

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



export default function Pokemon({ generation }) {

    const { data, status } = useQuery('pokemon', getPokemonFromGeneration());

  if (status === 'loading') {
    return (
      <div className="container">
        <img className="rotate" src={pokeball} alt="pokeball"></img>
        <h3>Loading...</h3>
      </div>
    )
  }

  if (status === 'error') {
    return <h2>Error :c</h2>
  }
}