let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charizard';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loaded pokemon', currentPokemon);

    renderPokeInfo();
}

function renderPokeInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('order').innerHTML = currentPokemon['order'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['front_shiny'];
}