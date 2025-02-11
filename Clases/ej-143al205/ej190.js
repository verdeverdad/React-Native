function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        // En lugar de llamar a onSuccess directamente, pasamos una arro función que al ejecutarse llame a onSuccess pasando el mensaje como parámetro.
        setTimeout(() => onSuccess(mensaje), 5000); // Simulamos una tarea asíncrona que tarda 2 segundos
    });
}

async function mostrarPromesa(mensaje) {

    const promesa = await crearPromesa("¡Promesa cumplida!");
    return mensaje + promesa
}

//   const promesa = crearPromesa("¡Promesa cumplida!");
const mostrar = mostrarPromesa("Wow, estamos usando async / await ")


mostrar.then((mensaje) => {
    console.log(mensaje);
});

console.log(mostrar)