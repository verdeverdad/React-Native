var miMascota = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
}
mostrarDatosMascota(miMascota);
