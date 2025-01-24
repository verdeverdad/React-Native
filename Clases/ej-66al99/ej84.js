let total = 14; 
let contador = 1;
let asteriscos = "*";


do {

  if (contador % 2 !== 0){
    console.log(asteriscos);
      asteriscos += "**"; 
}
    contador++;
}
while (contador <= total) {
  if (contador % 2 !== 0){
  console.log(asteriscos);}
  contador++;
}