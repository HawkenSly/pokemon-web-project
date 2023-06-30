import './colors.css';
import './Capsule.css'
import TypeBadge from './TypingBadges';
import * as React from 'react';


export default function Capsule({ pokemon }) {
    let { name } = pokemon;
    const typing = pokemon.types;

    switch (name) {
        case "giratina-altered":
            name = "giratina";
            break;
        case "shaymin-land":
            name = "shaymin";
            break;
        default:
            break;
    }



    const species = name.charAt(0).toUpperCase() + name.slice(1);
    let bulbapediaName = species;

    if (species.indexOf('-') > 0 ) {
        switch (species) {
            case 1: 
                break;
            default: 
                break;
        }
        
        let i = species.indexOf('-') + 1;
        bulbapediaName = bulbapediaName.replace('-', '_');
        let y = bulbapediaName.substr(0, i) + bulbapediaName[i].toUpperCase() + bulbapediaName.substr(i + 1);
        bulbapediaName = y;
    }
    

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
                href={`https://bulbapedia.bulbagarden.net/wiki/${bulbapediaName}_(Pokémon)`}
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