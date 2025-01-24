// Crear una función esPar que retorna un valor boolean
// Esta función debe validar si un número es par o no
// Ejecutar esta función con los siguientes números: 2, 5, 3, 24, 12
// En caso de que el número sea par mostrar un mensaje que diga: ${numero} es par
// Caso contrario mostrar en consola el siguiente mensaje: ${numero} no es par

function esPar(num){
    if (num % 2 === 0) {
        console.log(`el numero ${num} es par`)
        return true
    } else {
        console.log(`el numero ${num} no es par`)
        return false
    }
}

console.log(esPar(2));
console.log(esPar(5));
console.log(esPar(3));
console.log(esPar(24));
console.log(esPar(12));