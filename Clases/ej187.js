let tieneError = false;

function crearPromesa() {
    return new Promise((onSuccess, onError) => {
        if (tieneError === false) {
            onSuccess("TODO SALIÓ BIEN")
        } else {

            onError(new Error("FUUUUUCK")
            )
        }
    })
}

const promesa = crearPromesa();
promesa.then((mensaje) => {
    console.log(mensaje); 
});
promesa.catch((mensaje) => {
    console.log(mensaje); 
});
