const numeros = [];
for (let i = 0; i <= 10; i++) {
    numeros.push(i);
}
console.log(numeros)

function miMap(coleccion, funcion) {
    const resultado = [];
    for (let i = 0; i < coleccion.length; i++) {
        resultado.push(funcion(coleccion[i]));
    }
    return resultado;
}

function multiplicar(numero) {
    return numero * 2;
}
// console.log(multiplicar(5))
const numerosMultiplicados = miMap(numeros, multiplicar)
console.log(numerosMultiplicados)


