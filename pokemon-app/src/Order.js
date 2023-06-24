let testDex;

async function getGeneration(gen) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
    let data = await response.json()
    return data;
}

getGeneration('kanto').then(data => console.log(data));


export default testDex;
