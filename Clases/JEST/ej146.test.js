let usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};

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
autenticarUsuario("batman", "Alfred1960KPO!")

describe("Test autenticar usuario", () => {
    it("verificar si la variable usuario es correcta", () => {
        expect(autenticarUsuario("batman", "Alfred1960KPO!")).toBe(true)
    })
    it("verificar si la variable password es correcta", () => {
        expect(autenticarUsuario("batman", "Alfred1960KPO!")).toBe(true)
    })
})