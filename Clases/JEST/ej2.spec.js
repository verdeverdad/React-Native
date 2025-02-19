import { nombre } from "../ej-1al26/ej1";
import { apellido } from "../ej-1al26/ej1";
import { edad } from "../ej-1al26/ej1";
import { fechaDeNacimiento } from "../ej-1al26/ej1";
import { direccion } from "../ej-1al26/ej1";

describe("Nuestro primer test", () => {
    it("La variable nombre esta declarada pero no tiene valor asignado", () => {
      expect(nombre).toBe(undefined);
    });
    it("La variable apellido esta declarada pero no tiene valor asignado", () => {
      expect(apellido).toBe(undefined);
    });
    it("La variable edad esta declarada pero no tiene valor asignado", () => {
      expect(edad).toBe(undefined);
    });
    it("La variable fecha de nacimientoesta declarada pero no tiene valor asignado", () => {
      expect(fechaDeNacimiento).toBe(undefined);
    });
    it("La variable dirección esta declarada pero no tiene valor asignado", () => {
      expect(direccion).toBe(undefined);
    });
  });