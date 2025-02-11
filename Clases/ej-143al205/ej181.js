function crearMultiplicador(factor) {
    return function(input) {
      return input * factor;
    };
  }
  
  // Crear funciones multiplicadoras
  const doble = crearMultiplicador(2);
  const triple = crearMultiplicador(3);
  
  // Utilizar las funciones creadas
  console.log(doble(10)); // Imprime 20
  console.log(triple(4)); // Imprime 12

// Crear una función con el nombre crearMultiplicador que acepta un parámetro factor y retorna una función.
// La función retornada tiene un parámetro con el nombre input y retorna el resultado de multiplicar input y factor.
// Crear una variable con el nombre doble y asignarle el valor retornado por la función crearMultiplicador pasando 2 como parámetro.
// Ejecutar la función doble pasando como parámetro el número 10.
// Mostrar en pantalla el resultado de multiplicar 2 * 10 utilizando las funciones creadas.
// Repetir este proceso para un función con el nombre triple a la cual se le asigne el valor retornado al ejecutar la función crearMultiplicador pasando como parámetro el número 3.
// Mostrar el resultado en pantalla de ejecutar la función triple pasando el parámetro 4 y el resultado debe ser 12