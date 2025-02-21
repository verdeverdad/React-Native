"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miMascota = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};
function mostrarDatosMascota(mascotas) {
    console.log("La mascota se llama ".concat(mascotas.nombre, " y tiene ").concat(mascotas.edad, " a\u00F1os"));
    if (mascotas.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 el ".concat(mascotas.fechaDeNacimiento));
    }
}
mostrarDatosMascota(miMascota);
exports.default = {};
