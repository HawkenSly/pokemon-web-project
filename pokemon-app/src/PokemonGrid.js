/* eslint-disable jsx-a11y/alt-text */
import './colors.css';
import './Capsule.css'
import pokeball from './pokeball.svg';
import * as React from 'react';
import { useQuery } from 'react-query';
import TypeBadge from './TypingBadges';



async function getKantoPokemon() {
    const kantoPokemon = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let data = await response.json();
        kantoPokemon.push(data);
    }

    return kantoPokemon;
}


function Capsule({ pokemon }) {
    const { name } = pokemon;
    const typing = pokemon.types;



    const species = name.charAt(0).toUpperCase() + name.slice(1);

    let capsuleStyle;
    const typeCombo = [];


    const corners = () => {
        return `7px solid var(--${typing[0].type.name})`
    }

    const getBackgroundColor = () => {
        if (typing.length === 1) {
            return `var(--${typing[0].type.name}lite)`;
        } else {
            const [color1, color2] = typing.map((type) => `var(--${type.type.name}lite)`);
            return `linear-gradient(to right, ${color1} 0%, ${color1} 50%, ${color2} 50%, ${color2} 100%)`;
        }
    };


    if (typing.length === 1) {
        typeCombo.push(typing[0].type.name);
        capsuleStyle = {
            backgroundColor: getBackgroundColor(),
            border: corners()
        };
    }
    else {
        typeCombo.push(typing[0].type.name, typing[1].type.name);
        capsuleStyle = {
            background: getBackgroundColor(),
            border: corners()
        }
    }


    return (
        <div className="capsule" style={capsuleStyle}>
            <img
                className="small"
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={species}
            />
            <br />
            <a
                href={`https://bulbapedia.bulbagarden.net/wiki/${species}_(Pokémon)`}
                target="_blank"
                rel="noreferrer"
            >
                {species}
            </a>
            <br />
            <TypeBadge typing={typeCombo} />
        </div>
    );
}

export default function PokemonGrid() {
    const { data, status } = useQuery('pokemon', getKantoPokemon);

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

    const listPokemon = data.map(pokemon =>
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