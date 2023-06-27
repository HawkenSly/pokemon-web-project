import './Capsule.css'
import * as React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'




// async function getGeneration(gen) {
//   let response = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
//   let data = await response.json()
//   return data;
// }

// getGeneration('kanto').then(data => console.log(data))

async function getPokemon() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    let data = await response.json()
    return data;
}

getPokemon().then(data => console.log(data));


function Capsule() {
    return (
        <>
            <div className="capsule">

            </div>
        </>
    )
}

export default function PokemonGrid() {
    return (
        <>
            <div className="container">
                <div className="grid">
                    <div className="capsule">

                    </div>
                    <div className="capsule">

                    </div>
                    <div className="capsule">

                    </div>
                    <div className="capsule">

                    </div>
                    <div className="capsule">

                    </div>

                </div>
            </div>
        </>
    )
}