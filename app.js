const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokemonName');
const buttonPokemon = document.getElementById('searchPokemon');
buttonPokemon.addEventListener('click' , insertPokemon);
buttonPokemon.addEventListener('touchstart' , insertPokemon);


async function insertPokemon() {
  try {
    const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
    const pokemonDataJSON = await res.json()

    const allItems = [];
    const result = []; 

    for (let pokemonInfo in pokemonDataJSON) { 
      result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
    }

    console.table(result); 
    document.getElementById('imagen').src =result[14][1].front_default;;
    const pokemonImage = document.createElement('img');

    pokemonImage.src = result[14][1].front_default; 

    document.getElementById('nombre').innerText = result[10][1];
    document.getElementById('id').innerText = result[6][1];
    document.getElementById('tipo').innerText = result[16][1][0].type.name;

    document.getElementById('hp').innerText = result[15][1][0].base_stat;
    document.getElementById('ataque').innerText = result[15][1][1].base_stat;
    document.getElementById('defensa').innerText = result[15][1][2].base_stat;
    document.getElementById('aespecial').innerText = result[15][1][3].base_stat;
    document.getElementById('despecial').innerText = result[15][1][4].base_stat;
    document.getElementById('velocidad').innerText = result[15][1][5].base_stat;

  } catch (error) {
    console.error(error);
    alert("Ese pokemon no existe.");
  }
}

