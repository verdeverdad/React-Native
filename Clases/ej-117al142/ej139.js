const numeros = Array.from({length: 100}, (_, i) => i + 1);

const pares = numeros.filter(function (nota) {
    return nota % 2 == 0 ;
  });

  console.log(pares)

  const impares = numeros.filter(function (nota) {
    return nota % 2 !== 0 ;
  });

  console.log(impares)

  console.log(pares.slice(-10))