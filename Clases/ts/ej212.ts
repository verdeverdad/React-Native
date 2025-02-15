
interface Mascotas  {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
} 

const miMascota: Mascotas = {
    nombre: "Rex",
    edad: 11,
    fechaDeNacimiento: "23-02-2014"
};

const otraMascota: Mascotas = {
    nombre: "aquiles",
    edad: 8,
};

function mostrarDatosMascota(mascota) {
    
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    if (mascota.fechaDeNacimiento) {
        console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`)
    }
}
mostrarDatosMascota(miMascota);
mostrarDatosMascota(otraMascota);


export default {}