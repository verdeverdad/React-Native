function ordenarNumeros(numero1, numero2, numero3, descendente = false) {
    const numeros = [numero1, numero2, numero3];
  
    // Ordenar los números de menor a mayor
    numeros.sort((a, b) => a - b);
  
    // Si descendente es true, invertir el orden
    if (descendente) {
      numeros.reverse();
    }
  
    console.log(numeros.join(', '));
  }
  
  // Ejecutar la función con diferentes parámetros
  ordenarNumeros(20, 33, 25); // Salida: 8, 10, 25
  ordenarNumeros(10, 8, 25, true); // Salida: 25, 10, 8

// Crear una función con el nombre ordenarNúmeros que acepte tres parámetros numéricos llamados numero1, numero2 y numero3
// Dentro de la función ordenar los números de menor a mayor
// Ejecutar la función con los siguientes parámetros: 10, 8, 25
// Mostrar en consola el siguiente resultado: 8, 10, 25
// Agregar un último parámetro que acepte un tipo de dato boolean llamado descendente
// En caso de que el parámetro descendente sea verdadero mostrar en consola el siguiente mensaje: 25, 10, 8
// Ejecutar la función agregando true cómo último parámetro en el llamado de la función, ejemplo: ordenarNúmeros(10, 8, 25, true)