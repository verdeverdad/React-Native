const numeros = [];
for (let i = 0; i <= 10000; i++) {
  numeros.push(i);
}

console.log(numeros);

let suma = 0;
let sumaParcial = 0;


for (let j = 0; j < numeros.length; j++) {
  sumaParcial += numeros[j];
  console.log("Suma parcial hasta el elemento", j + 1, ":", sumaParcial);
}


for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma total es:", suma);

if (suma === 50005000) {
  console.log("El ejercicio es correcto");
} else {console.log("algo pasó")}