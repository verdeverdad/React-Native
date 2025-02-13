let notas: number[] = [6, 8, 7, 5]

let notas2: Array<number> = [5, 4, 8]

let nuevasNotas: Array<number> = notas.concat(notas2);
console.log(nuevasNotas.sort((a, b) => a - b))

class Vehiculo {
    marca: string; modelo:string; anio: number; color: string;
    constructor(marca: string, modelo:string, anio: number, color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}

const vehiculo = new Vehiculo("Toyota", "Rav4", 2024, "negro");
const vehiculo1 = new Vehiculo("Toyota", "4Runner", 2010, "gris");
const vehiculo2 = new Vehiculo("Honda", "Pilot", 2020, "blanco");
const vehiculo3 = new Vehiculo("Honda", "CR-V", 2015, "rojo");

console.log(vehiculo)
console.log(vehiculo1)
console.log(vehiculo2)
console.log(vehiculo3)
 
const listaDeVehiculos: Array<object> = []

listaDeVehiculos.push(vehiculo)
listaDeVehiculos.push(vehiculo1)
listaDeVehiculos.push(vehiculo2)
listaDeVehiculos.push(vehiculo3)

console.log(listaDeVehiculos)
export default {}