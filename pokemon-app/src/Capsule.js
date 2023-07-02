import './colors.css';
import './capsule.css'
import TypeBadge from './TypingBadges';
import * as React from 'react';
import { useState, useEffect } from 'react'



export default function Capsule({ pokemon }) {
    let { name } = pokemon;
    const typing = pokemon.types;

    const [favorite, setFavorite] = useState('off');

    


    function Fav() {
        if (favorite === "off") {
            return (
                <>
                    <svg onClick={() => setFavorite('on')} className="bi bi-heart heart heartempty" xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </>
            )
        }
        else {
            return (
                <>
                    <svg onClick={() => setFavorite('off')} className="bi bi-heart-fill heart heartfill" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                </>
            )
        }
    }

    switch (name) {
        case "giratina-altered":
            name = "giratina";
            break;
        case "shaymin-land":
            name = "shaymin";
            break;
        case "deoxys-normal":
            name = "deoxys";
            break;
        case "wormadam-plant":
            name = "wormadam";
            break;
        case "basculin-red-striped":
            name = "basculin";
            break;
        case "darmanitan-standard":
            name = "darmantian";
            break;
        case "tornadus-incarnate":
            name = "tornadus";
            break;
        case "keldeo-ordinary":
            name = "keldeo";
            break;
        case "thundurus-incarnate":
            name = "thundurus";
            break;
        case "landorus-incarnate":
            name = "landorus";
            break;
        case "meloetta-aria":
            name = "meloetta";
            break;
        case "meowstic-male":
            name = "meowstic";
            break;
        case "aegislash-shield":
            name = "aegislash";
            break;
        case "pumpkaboo-average":
            name = "pumpkaboo";
            break;
        case "gourgeist-average":
            name = "gourgeist";
            break;
        case "zygarde-50":
            name = "zygarde";
            break;
        case "oricorio-baile":
            name = "oricorio";
            break;
        case "lycanroc-midday":
            name = "lycanroc";
            break;
        case "wishiwashi-solo":
            name = "wishiwashi";
            break;
        case "minior-red-meteor":
            name = "minior";
            break;
        case "mimikyu-disguised":
            name = "mimikyu";
            break;
        case "toxtricity-amped":
            name = "toxtricity";
            break;
        case "urshifu-single-strike":
            name = "urshifu";
            break;
        case "basculegion-male":
            name = "basculegion";
            break;
        case "enamorus-incarnate":
            name = "enamorus";
            break;
        case "eiscue-ice":
            name = "eiscue";
            break;
        case "indeedee-male":
            name = "indeedee";
            break;
        case "morpeko-full-belly":
            name = "morpeko";
            break;
        case "mr-rime":
            break;
        default:
            break;
    }



    let species = name.charAt(0).toUpperCase() + name.slice(1);
    let bulbapediaName = species;
    let bpLink;

    if (species.indexOf('-') > 0) {
        let i = species.indexOf('-') + 1;
        bulbapediaName = bulbapediaName.replace('-', '_');
        let y = bulbapediaName.substr(0, i) + bulbapediaName[i].toUpperCase() + bulbapediaName.substr(i + 1);
        bulbapediaName = y;
    }

    switch (species) {
        default:
            break;
        case "Porygon-z":
            species = "Porygon-Z";
            break;
    }

    bpLink = `https://bulbapedia.bulbagarden.net/wiki/${bulbapediaName}_(Pokémon)`;

    switch (species) {
        default:
            break;
        case "Mr-mime":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)";
            break;
        case "Ho-oh":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)";
            break;
        case "Mime-jr":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Mime_Jr._(Pok%C3%A9mon)";
            break;
        case "Porygon-Z":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Porygon-Z_(Pok%C3%A9mon)";
            break;
        case "Type-null":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pok%C3%A9mon)";
            species = "Type: Null"
            break;
        case "Jangmo-o":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Jangmo-o_(Pok%C3%A9mon)";
            break;
        case "Hakamo-o":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Hakamo-o_(Pok%C3%A9mon)";
            break;
        case "Kommo-o":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Kommo-o_(Pok%C3%A9mon)";
            break;
        case "Mr. Rime":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Mr._Rime_(Pok%C3%A9mon)";
            species = "Mr. Rime"
            break;
        case "Wo-chien":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Wo-Chien_(Pok%C3%A9mon)";
            species = "Wo-Chien";
            break;
        case "Chien-pao":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Chien-Pao_(Pok%C3%A9mon)"
            species = "Chien-Pao";
            break;
        case "Ting-lu":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Ting-Lu_(Pok%C3%A9mon)";
            species = "Ting-Lu";
            break;
        case "Chi-yu":
            bpLink = "https://bulbapedia.bulbagarden.net/wiki/Chi-Yu_(Pok%C3%A9mon)";
            species = "Chi-Yu";
            break;
        case "Roaring-moon":
            species = "Roaring Moon";
            break;
        case "Iron-valiant":
            species = "Iron Valiant";
            break;
        case "Walking-wake":
            species = "Walking Wake";
            break;
        case "Iron-leaves":
            species = "Iron Leaves";
            break;
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
                href={bpLink}
                target="_blank"
                rel="noreferrer"
            >
                {species}
            </a>
            <br />
            <p className="idtext">#{pokemon.id}</p>
            <TypeBadge typing={typeCombo} />
            <br />
            <Fav />
        </div>
    );
}