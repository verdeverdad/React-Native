"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarDatosDeLaColeccion(data) {
    var animal = data;
    animal.forEach(function (data) {
        return console.log("Raza: ".concat(data.raza, "\nMuerde: ").concat(data.muerde, "\nColor: ").concat(data.color));
    });
}
;
var animales = [
    {
        raza: "Cocker",
        muerde: true,
        color: ["negro"],
    },
    {
        raza: "Persa",
        muerde: false,
        color: ["marron", "blanco"],
    },
    {
        raza: "León Africano",
        muerde: true,
        color: ["marron", "negro"],
    }
];
mostrarDatosDeLaColeccion(animales);
exports.default = {};
