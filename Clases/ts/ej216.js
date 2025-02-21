function mostrarMascota(mascota, tipo) {
    if (tipo === "Perro") {
        console.log("La mascota es un Canino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo === "Gato") {
        console.log("La mascota es un Felino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo === "Mono") {
        console.log("La mascota es un Monito y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else {
        console.log("Error al ingresar los datos");
    }
}
var perro = {
    nombre: "Rex",
    edad: 11
};
var gato = {
    nombre: "Michi",
    edad: 3
};
var mono = {
    nombre: "Luqui",
    edad: 6
};
mostrarMascota(mono, "Mono");
mostrarMascota(gato, "Gato");
mostrarMascota(perro, "Perro");
