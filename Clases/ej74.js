let total = 14; 
let contador = 1;
let asteriscos = "*";

console.log(asteriscos);
while (contador <= total) {
  if (contador % 2 !== 0){
  asteriscos += "**"; 
  console.log(asteriscos);}
  contador++;
}