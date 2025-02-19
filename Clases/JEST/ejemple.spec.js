describe("Nuestro primer test", () => {
    it("Comprobamos que nos gusta JavaScript y escribir tests", () => {
        const meGustaJavaScript = true;
        expect(meGustaJavaScript).toBe(true);
    });
});


function sumar(numero1, numero2) {
    return numero1 + numero2
}

describe("funcion sumar simple", () => {
    it("verificar la suma", () => {
        expect(sumar(2, 4)).toBe(6)
    })
})