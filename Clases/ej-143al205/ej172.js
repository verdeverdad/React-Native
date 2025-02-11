function crearMultiplicador(numero1) {
    return  function multiplicar(numero2) {
        // Completar esta función
       return numero1 * numero2
    };
  
}

const funcion = crearMultiplicador(3);
const resultado = funcion(5);
console.log(resultado);