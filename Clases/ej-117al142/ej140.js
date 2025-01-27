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

const listaFiltrada = listaDeMutantes.filter((_, index) => index !== 1);
console.log(listaFiltrada);
console.log(listaDeMutantes);
