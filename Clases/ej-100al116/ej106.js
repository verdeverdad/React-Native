function obtenerIDUsuario(){
    return 50;
}

function usuarioValido(){
    if (obtenerIDUsuario() > 30){
        console.log("El usuario es valido")
        return false
    } else {
        console.log("El usuario no es valido")
    }
}

usuarioValido()