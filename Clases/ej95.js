let a = 0;
let b = 1;

console.log("Los primeros 10 números de Fibonacci son:");

// while (contador <= 10) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
//   contador++;
// }

for (contador = 0; contador < 10; contador++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}