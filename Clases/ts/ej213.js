function mostrarDatosCamion(_a) {
    var marca = _a.marca, modelo = _a.modelo, color = _a.color, cantidadDePasajeros = _a.cantidadDePasajeros, cantidadDeAcoplados = _a.cantidadDeAcoplados;
    console.log("Marca: ".concat(marca, "\nModelo: ").concat(modelo, "\nColor: ").concat(color, "\nCantidad de pasajeros: ").concat(cantidadDePasajeros, "\nCantidad de acoplados: ").concat(cantidadDeAcoplados, "\n"));
}
function mostrarDatosAuto(_a) {
    var marca = _a.marca, modelo = _a.modelo, color = _a.color, cantidadDePasajeros = _a.cantidadDePasajeros, esDescapotable = _a.esDescapotable;
    console.log("Marca: ".concat(marca, "\nModelo: ").concat(modelo, "\nColor: ").concat(color, "\nCantidad de pasajeros: ").concat(cantidadDePasajeros, "\nEs descapotable: ").concat(esDescapotable));
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
mostrarDatosAuto(auto);
mostrarDatosCamion(camion);
