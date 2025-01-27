const gastos = [100, 350, 40, 1000, 500];
const sumaGastos = gastos.reduce(function (total, item) {
  return total + item;
}, 0);

console.log("Total de gastos del viaje: " + sumaGastos);