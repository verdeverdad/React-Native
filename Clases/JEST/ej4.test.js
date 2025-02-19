import { nombre, apellido, edad, fechaDeNacimiento, direccion } from "../ej-1al26/ej5.js"
// * Mostrar en consola el **valor** de cada una de las variables utilizando `console.log()`
 function mostrarValores() {
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
  console.log(fechaDeNacimiento);
  console.log(direccion);
}


const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test Ej 5", () => {
  afterEach(() => {
    log.mockReset();
  });

  test("se muestran los valores en pantalla", () => {
    mostrarValores();

    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenCalledWith("Sofía");
    expect(log).toHaveBeenCalledWith("Delmonte");
    expect(log).toHaveBeenCalledWith(33);
    expect(log).toHaveBeenCalledWith("16 diciembre 1991");
    expect(log).toHaveBeenCalledWith("La Floresta, Canelones");
  });
});