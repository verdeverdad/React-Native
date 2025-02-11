const vehiculo = {
    marca: "Toyota",
    modelo: "Rav4",
    cantidadDePuertas: 4,
    anio: 2024,
    color: "Black",
    toString: function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
        return this.color;
    },
};


function Vehiculo(marca, modelo, cantidadDePuertas, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cantidadDePuertas = cantidadDePuertas;
    this.anio = anio;
    this.color = color;
    this.toString = function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    }
    this.getColor = function () {
        return this.color;
    }
}

// vehiculo.toString();
// console.log(vehiculo.getColor());

const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");
// console.log(honda)
vehiculo.toString();
console.log(vehiculo.getColor());
vehiculo2.toString();
console.log(vehiculo2.getColor());