// Crear un documento con el nombre ej112.js
// Crear una función que se llame mostrarNumeros que acepte 2 parámetros numéricos inicio y fin
// Mostrar en consola los números que van desde el inicio hasta el fin
// Si el primer parámetro es más grande que el segundo la secuencia tiene que ser ascendente
// En caso que el primer número sea más chico que el primero la secuencia tiene que ser descendente
// Ejecutar la función utilizando los siguientes números:
// inicio = 0, fin = 1000
// inicio = 1000, fin = 0
// inicio = 100, fin = 100
// inicio = "100", fin = 300
// Resolver de alguna forma los siguientes inconvenientes
// Los números sean iguales
// Algunos de los parámetros no son números


function mostrarNumeros(inicio, fin) {
    let numeros = []
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log("Error, solo se pueden ingresar numeros")
    } else if (inicio === fin) {
        console.log("Error: Los numeros no pueden ser iguales")
    } else if (inicio < fin) {
        for (let i = inicio; i <= fin; i++) {
            numeros.push(i)
        }
        console.log(numeros)
    } else {
        for (let i = fin; i <= inicio; i++) {
            numeros.push(i)
            numeros.sort((a, b) => b - a); // Ordenar el array (descendente)

        }
        console.log(numeros)


    }
}
mostrarNumeros(100, 0)

