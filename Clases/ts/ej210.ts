const miMascota: {
    nombre: string,
    edad: number,
    fechaDeNacimiento?: string,
} = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};

function mostrarDatosMascota(Mascotas) {
    
    console.log(`La mascota se llama ${Mascotas.nombre} y tiene ${Mascotas.edad} años`)
    if (Mascotas.fechaDeNacimiento) {
        console.log(`La mascota nació en ${Mascotas.fechaDeNacimiento}`)
    }
}
mostrarDatosMascota(miMascota)