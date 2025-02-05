const usuario = {
    username: null,
    password: null,
    saludar: function () {
        if (usuario.username !== null) {
            console.log(`Hola, soy el usuario ${usuario.username} y mi contraseña es ${usuario.password}`)
        } else {
            console.log("Este usuario no tiene nombre")
        }
    },
    updateUsername: function (nombreIngresado) {
        return this.username = nombreIngresado;
    },
    updaterPassword: function (passwordIngresada) {
        return this.password = passwordIngresada
    }
}
console.log(usuario.updateUsername("Sofia"));
console.log(usuario.updaterPassword("123456"));
console.log(usuario.saludar());
