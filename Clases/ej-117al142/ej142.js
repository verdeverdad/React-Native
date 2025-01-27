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

const string = listaDeMutantes.reduce(function (total, mutante) {
    return total + " " + mutante + ",";
  }, "").slice(0, -1)
  
  console.log("String de todos los mutantes: " + string );