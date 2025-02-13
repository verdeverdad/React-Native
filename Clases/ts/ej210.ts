const miMascota: {
    nombre: string,
    edad: number,
    fechaDeNacimiento?: string,
} = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};

function mostrarDatosMascota(mascota) {
    
    if (mascota.fechaDeNacimiento) {
        console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`)
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
}
mostrarDatosMascota(miMascota)