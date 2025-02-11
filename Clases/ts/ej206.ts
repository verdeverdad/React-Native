// let altura: number = 150;
// let colorDePelo: string ="Oscuro";
// let edad: number = 50;
// let tieneTrabajo: boolean = true; 

class Vehiculo {
    marca: string; modelo:string; anio: number; color: string;
    constructor(marca: string, modelo:string, anio: number, color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}

const vehiculo = new Vehiculo("Toyota", "Rav4", 2024, "Black")
const vehiculo2 = new Vehiculo("Honda", "Pilot", 2025, "Dark Blue");

console.log(vehiculo)
console.log(vehiculo2)


export default {}