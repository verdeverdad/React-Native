"use strict";
// let altura: number = 150;
// let colorDePelo: string ="Oscuro";
// let edad: number = 50;
// let tieneTrabajo: boolean = true; 
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiculo;
}());
var vehiculo = new Vehiculo("Toyota", "Rav4", 2024, "Black");
var vehiculo2 = new Vehiculo("Honda", "Pilot", 2025, "Dark Blue");
console.log(vehiculo);
console.log(vehiculo2);
exports.default = {};
