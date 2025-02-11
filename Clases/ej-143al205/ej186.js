function crearPromesa(mensaje, mensaje2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mensaje, mensaje2);
      }, 2000); // Simulamos una tarea asíncrona que tarda 2 segundos
    });
  }
  
  const promesa = crearPromesa("¡Promesa cumplida!");
  
  promesa.then((mensaje) => {
    console.log(mensaje, "otro mensaje"); 
  });

  console.log(crearPromesa())