const miMascota: {
    nombre: string,
    edad: number,
    fechaDeNacimiento?: string,
} = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};

function mostrarDatosMascota(mascotas) {
    
    console.log(`La mascota se llama ${mascotas.nombre} y tiene ${mascotas.edad} años`)
    if (mascotas.fechaDeNacimiento) {
        console.log(`La mascota nació el ${mascotas.fechaDeNacimiento}`)
    }
}
mostrarDatosMascota(miMascota);

export default {};