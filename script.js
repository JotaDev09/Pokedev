/*let currentPokemon;

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
}*/

let allPokemon = [];
let Pokemon;
let PokemonName;
let PokemonOrder;
let PokemonType;
let PokemonImg;
let PokemonColor;
let start = 1;
let limit = 152;

async function loadPokemon() { //La palabra clave async se añade a las funciones para que 
                              //devuelvan una promesa en lugar de un valor directamente
    for (let i = start; i < limit; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url); //Una función asíncrona es una función que sabe que es posible que
                                    //se use la palabra clave  await dentro de ella para invocar código asíncrono.
    Pokemon = await response.json();
    allPokemon.push(Pokemon);
    //let results = currentPokemon['results'];
    //let pages = currentPokemon['url'];
    console.log('loaded pokemon', Pokemon);
                              }
    //renderPokeInfo();
    renderPokemon();
}


function renderPokemon() {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        PokemonName = pokemon['name'];
        PokemonOrder = pokemon['id'];
        PokemonType = pokemon ['types']['0']['type']['name'];
        //currentPokemonType2 = pokemon ['types']['1']['type']['name'];
        PokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
        pokedex.innerHTML += renderPokedex(i, PokemonName, PokemonOrder, PokemonType, PokemonImg, PokemonColor);
        renderTypeColor(PokemonType);
    }
    
    
   // document.getElementById('pokemonName').innerHTML = currentPokemon['name']
}

function renderPokedex(i, PokemonName, PokemonOrder, PokemonType, PokemonImg, PokemonColor) {
    return `
            <div class="card" id="card${i}" style="background-color: ${PokemonColor};">
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


function renderTypeColor(PokemonType) {
    if (PokemonType == 'grass') {
        return PokemonColor = '#7CFC00';
    }
    if (PokemonType == 'fire') {
        return PokemonColor = '#e25822 ';
    }
    if (PokemonType == 'water') {
        return PokemonColor = '#d4f1f9 ';
    }
    if (PokemonType == 'bug') {
        return PokemonColor = '#729F3F ';
    }
    if (PokemonType == 'normal') {
        return PokemonColor = '#A4ACAF ';
    }
    if (PokemonType == 'poison') {
        return PokemonColor = '#B97FC9 ';
    }
    if (PokemonType == 'electric') {
        return PokemonColor = '#FDD023 ';
    }
    if (PokemonType == 'ground') {
        return PokemonColor = '#9b7653';
    }
    if (PokemonType == 'fairy') {
        return PokemonColor = '#FAB9E9';
    }
    if (PokemonType == 'fighting') {
        return PokemonColor = '#D56723';
    }
    if (PokemonType == 'psychic') {
        return PokemonColor = '#F366B9';
    }
    if (PokemonType == 'rock') {
        return PokemonColor = '#5A4D41';
    }
    if (PokemonType == 'ghost') {
        return PokemonColor = '#f8f8ff';
    }
    if (PokemonType == 'dragon') {
        return PokemonColor = '#6AFB92';
    }
    

    return PokemonColor;
}

/*
function renderPokeInfo() {
    pokemonId= Pokemon['id'];
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonClass').innerHTML = currentPokemon['types']['0']['type']['name'];
}

function renderPokedex() {
     document.getElementById('pokemonOrder').innerHTML = ${pokemonId}
}

function renderPokedex() {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML += `<a>pokemon name ist ${['name']}</a><br>
    <a>page ist ${['order']}</a><br>
    <div id="id"></div>
    `
    let info = document.getElementById('id');
    info.innerHTML = currentPokemon['id']
    //pokedex.innerHTML = ``

//for (let i = 0; i < results.length; i++) {
  //  const result = results[i];
    
    //let order = result['0'];
    
    
    /*for (let j = 0; j < results.length; j++) {
        const result = results[j];
        pokedex.innerHTML += `<a>page ist ${result['url']}</a>`
        
    }*/
//}

/*
async function renderPokemon() {
    for (let j = start; j < limit; j++) {
        let url2 = `https://pokeapi.co/api/v2/pokemon/${j}`;
        let response2 = await fetch(url2);
        Pokemon = await response2.json();
        allPokemon.push(Pokemon);
    }
    
    
    let orders = Pokemon['id'];
    //let pages = currentPokemon['url'];
    console.log('load pokemon', Pokemon); 

    renderPokeDate(orders);
}*/
/*
function renderPokeDate(orders) {
    let info = document.getElementById('id');
    info.innerHTML = Pokemon['id'];
    /*for (let j = 0; j < orders.length; j++) {
        
        const order = orders[j];
        info.innerHTML += `<a> order ist ${order}</a>`
    }*/
    





