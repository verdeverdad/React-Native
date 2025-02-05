const numeros = [];
for (let i = 0; i <= 100; i++) {
  numeros.push(i);
}

const nuevaLista = numeros.map(function (num, indice) {
    if (num <=10) {
      
    console.log(("indice", indice) + " " + num + " " + (num + 10))
}
return num + 10;
  });

  console.log(nuevaLista);