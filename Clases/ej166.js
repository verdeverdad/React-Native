const usuario = {
    nombre: "Sofía"
}

function isUserValid() {
    if (usuario.nombre === "Sofía") {
        console.log("EL Usuario es valido")
    } else {
        console.log("Problemas :(")
    }
}

isUserValid()