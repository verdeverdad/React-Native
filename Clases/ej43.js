// Crear un documento con el nombre ej43.js
// Declarar una variable texto con el siguiente valor: juego de tronos
// Declarar 3 variables en una línea con los siguientes nombres:
// primerLetra
// segundaLetra
// Tercera letra
// Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
// Asignar a la variable segundaLetra el caracter número 5 del contenido de la variable texto
// Asignar a la variable tercerLetra el caracter número 8 del contenido de la variable texto
// Declarar una variable resultado con el valor de concatenar las variables primerLetra , segundaLetra y tercerLetra
// Mostrar en consola el contenido de la variable resultado en mayúscula
// Deberías ver GOT como resultado

let texto = "game of trone";
let primeraLetra, segundaLetra, terceraLetra;

primeraLetra = texto.charAt(0);
segundaLetra = texto.charAt(5);
terceraLetra = texto.charAt(8);

let resultado = primeraLetra.concat(segundaLetra, terceraLetra);
console.log(resultado.toUpperCase());