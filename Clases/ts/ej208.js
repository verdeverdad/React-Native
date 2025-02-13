"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumarNumeros(inicio, fin) {
    var suma = 0;
    var numeros = [];
    for (var i = inicio; i <= fin; i++) {
        numeros.push(i);
    }
    numeros.forEach(function (numero) {
        suma += numero;
    });
    var resultadoString = suma.toString();
    console.log("La suma es: " + resultadoString);
    return resultadoString;
}
sumarNumeros(0, 10);
sumarNumeros(20, 30);
sumarNumeros(5, 50);
sumarNumeros(10, 20);
exports.default = {};
