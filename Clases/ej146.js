let usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};
// console.log(usuario);
// console.log(usuario.username);
// console.log(usuario.password);

function autenticarUsuario(nombreDeUsuario, clave){
    if (nombreDeUsuario === "batman" && clave === "Alfred1960KPO!") {
        return true
    }
}

if (autenticarUsuario("batman", "Alfred1960KPO!")) {
    console.log( usuario.username, usuario.password)
} else { 
    console.log("error: Usuario no autenticado")
}

console.log(autenticarUsuario("batman", "Alfred1960KPO!"))
