let texto = "HOLA";
let primerLetra = texto.charAt(3);
let segundaLetra = texto.charAt(2);
let terceraLetra = texto.charAt(1);
let cuartaLetra = texto.charAt(0);
let resultado = primerLetra.concat(segundaLetra, terceraLetra, cuartaLetra);

console.log(resultado.toLowerCase());
//console.log(texto.split('').reverse().join(''));