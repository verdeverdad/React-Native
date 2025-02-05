function crearPromesa(mensaje) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mensaje);
      }, 2000); // Simulamos una tarea asíncrona que tarda 2 segundos
    });
  }
  
  const promesa = crearPromesa("¡Promesa cumplida!");
  
  promesa.then((mensaje) => {
    console.log(mensaje); // Imprimirá: "¡Promesa cumplida!" después de 2 segundos
  });

  console.log(crearPromesa())