import * as React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import pokeball from './pokeball.svg';
import PokemonGrid from './PokemonGrid'


function getPokemonFromGeneration(gen) {
    let start = 1;
    let end = 151;

    switch (gen) {
        case 2:
            start = 152;
            end = 251;
            break;
        case 3:
            start = 252;
            end = 386;
            break;
        case 4:
            start = 387;
            end = 493;
            break;
        case 5:
            start = 494;
            end = 649;
            break;
        case 6:
            start = 650;
            end = 721;
            break;
        case 7:
            start = 722;
            end = 809;
            break;
        case 8:
            start = 810;
            end = 905;
            break;
        case 9:
            start = 906;
            end = 1010;
            break;
        default:
            break;
    }

    const promises = [];
    for (let i = start; i <= end; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    return Promise.all(promises);
}



export default function Content() {
    let generation = 2;

    const { data, status } = useQuery(['pokemon', generation], () =>
        getPokemonFromGeneration(generation)
    );

    if (status === 'loading') {
        return (
            <div className="container">
                <img className="rotate" src={pokeball} alt="pokeball" />
                <h3>Loading...</h3>
            </div>
        );
    }

    if (status === 'error') {
        return <h2>Error :c</h2>;
    }

    return <PokemonGrid pokemonGeneration={data} />;
}