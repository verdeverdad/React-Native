function calcularPromedio(...numeros){

    if (numeros === 0){
        console.log("No se han proporcionado numeros")
    }

    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numeros.length;
    return promedio;
}


console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35, 45));
console.log(calcularPromedio(100, 200));
console.log(calcularPromedio());