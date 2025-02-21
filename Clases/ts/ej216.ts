interface Mascota {
    nombre: string,
    edad: number
}

type TipoDeAnimales = "Perro" | "Gato" | "Mono";

function mostrarMascota(mascota: Mascota, tipo: TipoDeAnimales) {
    if (tipo === "Perro") {
        console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    } else if (tipo === "Gato") {
        console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    } else if (tipo === "Mono") {
        console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    } else {
        console.log("Error al ingresar los datos")
    }
}
 

const perro = {
    nombre: "Rex",
    edad: 11
}

const gato = {
    nombre: "Michi",
    edad: 3
}

const mono = {
    nombre: "Luqui",
    edad: 6
}
mostrarMascota(mono, "Mono");
mostrarMascota(gato, "Gato");
mostrarMascota(perro, "Perro");

export default {}