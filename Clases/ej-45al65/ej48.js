let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = parseFloat(mensaje.slice(0, 4));
let significadoDeLaVida = parseFloat(mensaje.slice(38, 40));
let resultado = pi + significadoDeLaVida;

console.log(pi)
console.log(significadoDeLaVida)
console.log(resultado);
console.log(`${resultado} es el resultado de sumar las variables ${pi.toString()} y ${significadoDeLaVida.toString()}`)
console.log(resultado.toString() + " es el resultado de sumar las variables pi y significadoDeLaVida")
