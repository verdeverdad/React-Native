function bienvenida() {
    let nombre = "Sofía";
    let saludo = "Bienvenido/a";
    console.log(saludo, nombre, " al curso de ECMAScript!!");
}

describe('Se muestra el console log', () => {
    test('funciona bienvenida ', () => {
        // Espía la función console.log ANTES de llamar a bienvenida()
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        bienvenida();

        // Verifica que console.log se llamó UNA vez
        expect(logSpy).toHaveBeenCalledTimes(1);

        // Verifica que console.log se llamó CON los argumentos correctos
        expect(logSpy).toHaveBeenCalledWith("Bienvenido/a", "Sofía", " al curso de ECMAScript!!");

        // Restaura la función original console.log (buena práctica)
        logSpy.mockRestore();
    });
});