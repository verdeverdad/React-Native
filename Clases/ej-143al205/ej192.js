
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?Limit=20";
// const datos = fetch(POKE_API_URL)
// .then((response) => {
//   return response.json();
// })
// .then((allPokemon) => console.log(allPokemon));

// const datosParse = (respuesta) => {
//     return respuesta.json()
// }

// const mostrarPokemones = (pokemones) => {
//     pokemones.results.forEach((pokemon) => {
//     console.log("Pokemon: " + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
//     }); 
// }
const mostratError = () => {
    new Error(console.log("Los unicornios lo hicieron ptra vez"))
}
async function getPokemon() {
    try {
        const response = await fetch(POKE_API_URL);
        const pokemones = await response.json();

        const mostrarPokemones = () => {
            pokemones.results.forEach((pokemon) => {
                console.log("Pokemon: " + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            });
        }
        mostrarPokemones()
    } catch (error) {
        mostratError();
    }
}

getPokemon()

// const mostratError = (error) => {
//     new Error(console.log("Los unicornios lo hicieron ptra vez"))



// datos.then(datosParse).then(mostrarPokemones).catch(mostratError)