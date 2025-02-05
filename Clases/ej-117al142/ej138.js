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

const nuevaLista = listaDeMutantes.map(function (mutante) {
    if (mutante === "Prof. Charles Francis Xavier" || mutante === "James 'Logan' Howlett" || mutante === "Jean Elaine Grey") {
      
    console.log("<3 " + mutante)
    return "<3 " + mutante;
} else {
return mutante;}
  });

console.table(listaDeMutantes)
console.table(nuevaLista)