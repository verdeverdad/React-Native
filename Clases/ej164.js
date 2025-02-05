const numeros = [];
for (let i = 0; i <= 10; i++) {
    numeros.push(i);
}
// console.log(numeros)

function miforEach(coleccion, funcion) {
    for (let i = 0; i < coleccion.length; i++) {
        funcion(coleccion[i], i, coleccion)
    }
}

function mostrarNumero(numero, indice, coleccion) {
    console.log(`El numero en la posicion ${indice} es: ${numero}`)
}

console.log(miforEach(numeros, mostrarNumero))