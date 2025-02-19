import { nombre, apellido, edad, fechaDeNacimiento, direccion } from "../ej-1al26/ej2";

describe("Nuestro primer test", () => {
    it("Valor correcto de la variable nombre", () => {
      expect(nombre).toBe("Sofía");
    });
    it("Valor correcto de la variable apellido", () => {
      expect(apellido).toBe("Delmonte");
    });
    it("Valor correcto de la variable edad", () => {
      expect(edad).toBe(33);
    });
    it("Valor correcto de la variable fecha de nacimiento", () => {
      expect(fechaDeNacimiento).toBe(16/12/1991);
    });
    it("Valor correcto de la variable direccion", () => {
      expect(direccion).toBe("La Floresta, Canelones");
    });
  });