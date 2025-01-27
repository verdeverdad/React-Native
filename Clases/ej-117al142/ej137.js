let numeros = [
    10,
    15,
    27,
    33,
    70,
    55,
    7,
    22
]

const nuevaLista = numeros.map(function (num, indice) {
    
    console.log(("indice", indice) + " " + num + " " + (num + 10))
    return num + 10;
    
  });

  console.log(nuevaLista)