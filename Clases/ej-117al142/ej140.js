let listaDeMutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip Hank McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
]

const mutanteFiltrado = listaDeMutantes.filter(function (mutante) {
  return mutante === "Scott Summers";
});


// Desestructuración para obtener el primer y segundo elemento
let [primerElemento, segundoElemento, ...resto] =listaDeMutantes;

// Crear un nuevo array con el orden invertido
let nuevaListaMutantes = [segundoElemento, primerElemento, ...resto];


const listaFiltrada = listaDeMutantes.filter((_, index) => index !== 1);


console.table(mutanteFiltrado);
console.log(mutanteFiltrado + ", " + listaFiltrada)
console.table(listaDeMutantes)
console.table(nuevaListaMutantes);
