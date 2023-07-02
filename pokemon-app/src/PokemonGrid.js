/* eslint-disable jsx-a11y/alt-text */
import './colors.css';
import Capsule from './Capsule';
import * as React from 'react';





export default function PokemonGrid({ pokemonGeneration }) {

    const listPokemon = pokemonGeneration.map(pokemon =>
        <Capsule key={pokemon.id} pokemon={pokemon} />
    )

    return (
        <>
            <div className="grid">
                {listPokemon}
            </div>
        </>
    )
}


// async function getGeneration(gen) {
//   let response = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
//   let data = await response.json()
//   return data;
// }

// getGeneration('kanto').then(data => console.log(data))