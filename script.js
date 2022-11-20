let allPokemon = [];
let Pokemon;
let PokemonName;
let PokemonOrder;
let PokemonType;
let PokemonImg;
let PokemonColor;
let start = 1;
let limit = 25;


//load the first 24 Pokemon
async function loadPokemon() { 
    for (let i = start; i < limit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        Pokemon = await response.json();
        allPokemon.push(Pokemon);
    }
    renderPokemon();
    start += 24;
    limit += 24;
}


//load the info of the Pokémon
function renderPokemon() {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        PokemonName = pokemon['name'];
        PokemonOrder = pokemon['id'];
        PokemonType = pokemon['types']['0']['type']['name'];
        //currentPokemonType2 = pokemon ['types']['1']['type']['name'];
        PokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
        renderTypeColor(PokemonType);
        pokedex.innerHTML += renderPokedex(i, PokemonName, PokemonOrder, PokemonType, PokemonImg, PokemonColor);
    }
}


//render de Pokédex with all the Information
function renderPokedex(i, PokemonName, PokemonOrder, PokemonType, PokemonImg, PokemonColor) {
    return `
            <div class="card" id="card${i}" style="background-color: ${PokemonColor};" onclick="openCard(${i})">
                <div class="card_name">
                    <a id="pokemonName">#${PokemonOrder}&nbsp${PokemonName}</a>
                </div>
                <div class="card_img">
                    <img src="${PokemonImg}">
                </div>
                <div class="card_type">
                    <a>${PokemonType}&nbsp</a>
                </div>
            </div>`;
}


//load color according to type
function renderTypeColor(PokemonType) {
    if (PokemonType == 'grass') {
        return PokemonColor = '#47735C';
    }
    if (PokemonType == 'fire') {
        return PokemonColor = 'rgb(220, 78, 58)';
    }
    if (PokemonType == 'water') {
        return PokemonColor = '#64a3b5 ';
    }
    if (PokemonType == 'bug') {
        return PokemonColor = '#729F3F ';
    }
    if (PokemonType == 'normal') {
        return PokemonColor = '#A4ACAF ';
    }
    if (PokemonType == 'poison') {
        return PokemonColor = '#79587f ';
    }
    if (PokemonType == 'electric') {
        return PokemonColor = '#ffc500 ';
    }
    if (PokemonType == 'ground') {
        return PokemonColor = '#5a3929';
    }
    if (PokemonType == 'fairy') {
        return PokemonColor = '#dcb2c1';
    }
    if (PokemonType == 'fighting') {
        return PokemonColor = '#5c5c5c';
    }
    if (PokemonType == 'psychic') {
        return PokemonColor = '#2dd1c0';
    }
    if (PokemonType == 'rock') {
        return PokemonColor = '#4d4c5a';
    }
    if (PokemonType == 'ghost') {
        return PokemonColor = '#184e7a';
    }
    if (PokemonType == 'ice') {
        return PokemonColor = '#b9bded';
    }
    if (PokemonType == 'dragon') {
        return PokemonColor = '#f1b46c';
    }

    return PokemonColor;
}


//open the card of chosen pokémon
function openCard(i) {
    let id = allPokemon[i]['id'];
    let name = allPokemon[i]['name'];
    let img = document.getElementById('imgPokemon');
    PokemonType = allPokemon[i]['types']['0']['type']['name'];
    document.getElementById('container2').classList.remove('d-none');
    document.getElementById('open_card').classList.remove('d-none');
    document.getElementById('idPokemon').innerHTML = '#' + id;
    renderStatus(i);
    renderTypeColor(PokemonType);
    big_card.style = `background-color: ${PokemonColor}`;
    document.getElementById('namePokemon').innerHTML = name;
    document.getElementById('typePokemon').innerHTML = PokemonType;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
}


//close the card
function closeCard() {
    document.getElementById('container2').classList.add('d-none');
    document.getElementById('open_card').classList.add('d-none');
}


//load the info of the Status
function renderStatus(i) {
    document.getElementById('hp').innerHTML = allPokemon[i]['stats']['0']['base_stat'] + 'HP';
    document.getElementById('attack').innerHTML = allPokemon[i]['stats']['1']['base_stat'];
    document.getElementById('defense').innerHTML = allPokemon[i]['stats']['2']['base_stat'];
    document.getElementById('special-attack').innerHTML = allPokemon[i]['stats']['3']['base_stat'];
    document.getElementById('special-defense').innerHTML = allPokemon[i]['stats']['4']['base_stat'];
    document.getElementById('speed').innerHTML = allPokemon[i]['stats']['5']['base_stat'];
}


//search Pokémon
function searchPokemon() {
    let search = document.getElementById('searchPokemon').value;
    search = search.toLowerCase(); //Devuelve el valor a minúsculas
    let container = document.getElementById('pokedex');
    container.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const PokemonName = allPokemon[i]['name'];
        PokemonOrder = allPokemon[i]['id'];
        PokemonType = allPokemon[i]['types']['0']['type']['name'];
        PokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
        renderTypeColor(PokemonType);
        document.getElementById('clear').classList.remove('hidden');
        if (PokemonName.toLowerCase().includes(search)) {
            pokedex.innerHTML += renderPokedex(i, PokemonName, PokemonOrder, PokemonType, PokemonImg, PokemonColor);
        }
    }
    if (search == '') {
        renderPokemon();
        document.getElementById('clear').classList.add('hidden');
    }
}


//clear the input search
function clearSearch() {
    document.getElementById('searchPokemon').value = '';
    renderPokemon();
    document.getElementById('clear').classList.add('hidden');
}