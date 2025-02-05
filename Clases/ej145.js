let usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};
console.log(usuario);
console.log(usuario.username);
console.log(usuario.password);

if (usuario.username === "batman" && usuario.password === "Alfred1960KPO!") {
    console.log( usuario.username, usuario.password)
} else { 
    console.log("error: Usuario no autenticado")
}