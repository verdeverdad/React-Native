
let a = 0;
let b = 1;
let contador = 0;

console.log("Los primeros 10 números de Fibonacci son:");

while (contador <= 10) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
  contador++;
}