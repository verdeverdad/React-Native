"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miMascota = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};
var otraMascota = {
    nombre: "aquiles",
    edad: 8,
};
function mostrarDatosMascota(mascota) {
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
}
mostrarDatosMascota(miMascota);
mostrarDatosMascota(otraMascota);
exports.default = {};
