function invertirTexto(texto){
   return texto.split('').reverse().join('');
}
console.log(invertirTexto("textos"))

//split('') divide el texto en un arreglo de caracteres
// reverse() invierte el orden de los elementos del arreglo,
//join('') une los caracteres del arreglo invertido en una nueva cadena, sin ningún separador entre ellos.