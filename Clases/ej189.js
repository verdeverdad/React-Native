function crearPromesa(mensaje) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mensaje);
      }, 5000); // Simulamos una tarea asíncrona que tarda 2 segundos
    });
  }

  async function mostrarPromesa(mensaje){
    const promesa =  await crearPromesa("¡Promesa cumplida!");
    return mensaje + promesa
  }
  
//   const promesa = crearPromesa("¡Promesa cumplida!");
  const mostrar = mostrarPromesa("Wow, estamos usando async / await ")


  mostrar.then((mensaje) => {
    console.log(mensaje); 
  });

  console.log(mostrar)