function suma(valor1: number, valor2: number): number {
    return valor1 + valor2;
}

console.log(suma(10, 20))

function saludar(nombre: string){
    console.log(`hola ${nombre} bienvenida`)
}

saludar("Sofía");

const POKE_API_URL_TY = "https://pokeapi.co/api/v2/pokemon?Limit=20";

const mostrarError = () => {
    new Error(console.log("Los unicornios lo hicieron ptra vez"))
}
async function getPokemons() {
    try {
        const response = await fetch(POKE_API_URL_TY);
        const pokemones = await response.json();

        const mostrarPokemones = () => {
            pokemones.results.forEach((pokemon) => {
                console.log("Pokemon: " + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            });
        }
        mostrarPokemones()
    } catch (error) {
        mostrarError();
    }
}

getPokemons()

export default {}