import './colors.css';
import './capsule.css'
import TypeBadge from './TypingBadges';
import * as React from 'react';
import Favorites from './Favorites'
import { useState } from 'react'



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

    switch(species) {
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
        </div>
    );
}