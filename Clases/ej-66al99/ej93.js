let total = 14;
let contador = 1;
let asteriscos = "**************";


// console.log(asteriscos);
// while (total >= contador)  {
//   asteriscos = asteriscos.slice(0, -1); 
//   console.log(asteriscos);
//   contador++;
// }

console.log(asteriscos);

for (contador = 1; contador <= total; contador++) {
    asteriscos = asteriscos.slice(0, -1);
    console.log(asteriscos);
}