const fetch = require('node-fetch'); 

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?Limit=20";

fetch(POKE_API_URL)
  .then((response) => {
    return response.json();
  })
  .then((allPokemon) => console.log(allPokemon));