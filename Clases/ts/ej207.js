"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notas = [6, 8, 7, 5];
var notas2 = [5, 4, 8];
var nuevasNotas = notas.concat(notas2);
console.log(nuevasNotas.sort(function (a, b) { return a - b; }));
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiculo;
}());
var vehiculo = new Vehiculo("Toyota", "Rav4", 2024, "negro");
var vehiculo1 = new Vehiculo("Toyota", "4Runner", 2010, "gris");
var vehiculo2 = new Vehiculo("Honda", "Pilot", 2020, "blanco");
var vehiculo3 = new Vehiculo("Honda", "CR-V", 2015, "rojo");
console.log(vehiculo);
console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);
var listaDeVehiculos = [];
listaDeVehiculos.push(vehiculo);
listaDeVehiculos.push(vehiculo1);
listaDeVehiculos.push(vehiculo2);
listaDeVehiculos.push(vehiculo3);
console.log(listaDeVehiculos);
exports.default = {};
