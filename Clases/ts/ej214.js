"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function mostrarDatosCamion({ marca, modelo, color, cantidadDePasajeros, cantidadDeAcoplados }: Camion) {
//     console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nCantidad de acoplados: ${cantidadDeAcoplados}\n`);
// }
// function mostrarDatosAuto({ marca, modelo, color, cantidadDePasajeros, esDescapotable }: Auto) {
//     console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nEs descapotable: ${esDescapotable}`);
// }
function mostrarAutoOCamion(Vehiculo) {
    console.log("Marca: ".concat(Vehiculo.marca, "\nModelo: ").concat(Vehiculo.modelo, "\nColor: ").concat(Vehiculo.color, "\nCantidad de pasajeros: ").concat(Vehiculo.cantidadDePasajeros));
    if ("esDescapotable" in Vehiculo) {
        console.log("Es descapotable: ".concat(Vehiculo.esDescapotable));
    }
    else {
        console.log("Cantidad de acoplados: ".concat(Vehiculo.cantidadDeAcoplados));
    }
}
var auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};
var camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};
mostrarAutoOCamion(auto);
mostrarAutoOCamion(camion);
// mostrarDatosAuto(auto);
// mostrarDatosCamion(camion);
exports.default = {};
