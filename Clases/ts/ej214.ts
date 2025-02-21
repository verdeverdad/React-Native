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

// function mostrarDatosCamion({ marca, modelo, color, cantidadDePasajeros, cantidadDeAcoplados }: Camion) {
//     console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nCantidad de acoplados: ${cantidadDeAcoplados}\n`);
// }

// function mostrarDatosAuto({ marca, modelo, color, cantidadDePasajeros, esDescapotable }: Auto) {
//     console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nEs descapotable: ${esDescapotable}`);
// }

function mostrarAutoOCamion (Vehiculo: Auto | Camion) {
    console.log(`Marca: ${Vehiculo.marca}\nModelo: ${Vehiculo.modelo}\nColor: ${Vehiculo.color}\nCantidad de pasajeros: ${Vehiculo.cantidadDePasajeros}`);
    if ("esDescapotable" in Vehiculo) {
        console.log(`Es descapotable: ${Vehiculo.esDescapotable}`);
      } else {
        console.log(`Cantidad de acoplados: ${Vehiculo.cantidadDeAcoplados}`);
      }
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

  mostrarAutoOCamion(auto);
  mostrarAutoOCamion(camion);
// mostrarDatosAuto(auto);
// mostrarDatosCamion(camion);
export default {}