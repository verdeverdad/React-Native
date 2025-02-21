interface Vehiculo {
    marca: string,
    modelo: string,
    color: string,
    cantidadDePasajeros: number
}

interface Auto extends Vehiculo {
    esDescapotable: boolean
}

interface Camion extends Vehiculo {
    cantidadDeAcoplados: number
}

function mostrarDatosCamion({ marca, modelo, color, cantidadDePasajeros, cantidadDeAcoplados }: Camion) {
    console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nCantidad de acoplados: ${cantidadDeAcoplados}\n`);
}

function mostrarDatosAuto({ marca, modelo, color, cantidadDePasajeros, esDescapotable }: Auto) {
    console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nEs descapotable: ${esDescapotable}`);
}


const auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};

  const camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
  };

mostrarDatosAuto(auto);
mostrarDatosCamion(camion);

export default {}