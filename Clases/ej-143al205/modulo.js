export let numero1 = 0;
export let numero2 = 100;

export function mostrarNumeros(inicio, fin) {
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

