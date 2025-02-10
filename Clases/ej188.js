//PRIMERA CONSIGNA v PRIMERA CONSIGNA PRIMERA CONSIGNA PRIMERA CONSIGNA
// function crearPromesa(mensaje) {
//     return new Promise((onSuccess) => {
//       setTimeout(() => {
//         onSuccess(mensaje);
//       }, 5000); 
//     });
//   }

//   const promesa = crearPromesa("Pasaron 5 segundos y la promesa fue exitosa");

//   promesa.then((mensaje) => {
//     console.log(mensaje); 
//   });

//   console.log(crearPromesa())

//SEGUNDA CONSIGNA SEGUNDA CONSIGNA SEGUNDA CONSIGNA SEGUNDA CONSIGNA

// function crearPromesa(mensaje, delay) {
//     return new Promise((onSuccess) => {
//         setTimeout(() => {
//             onSuccess(mensaje, delay);
//         }, delay * 1000);
//     });
// }

// const promesa = crearPromesa("Pasaron", 2);
// const promesa2 = crearPromesa("Pasaron", 5);
// const promesa3 = crearPromesa("Pasaron", 10);

// promesa.then((mensaje) => {
//     console.log(mensaje, 2, "segundos y la promesa se cumplió");
// });
// promesa2.then((mensaje) => {
//     console.log(mensaje, 5, "segundos y la promesa se cumplió");
// });
// promesa3.then((mensaje) => {
//     console.log(mensaje, 10, "segundos y la promesa se cumplió");
// });

// console.log(promesa);
// console.log(promesa2);
// console.log(promesa3);


//TERCRA CONSIGNA TERCRA CONSIGNA TERCRA CONSIGNA TERCRA CONSIGNA
let tieneError = false;
function crearPromesa(mensaje, delay, tieneError) {
    
        return new Promise((onSuccess, onError) => {
            if (tieneError === false) {
                setTimeout(() => {
                    onSuccess(mensaje, delay);
                }, delay * 1000);
            } else {
                onError(new Error("Algo salió mal"))
            }
        });
    }
    


const promesa = crearPromesa("Pasaron", 2, false);
const promesa2 = crearPromesa("Pasaron", 5, false);
const promesa3 = crearPromesa("Pasaron", 10, false);
const promesa4 = crearPromesa("Pasaron", 3, true)

promesa.then((mensaje) => {
    console.log(mensaje, 2, "segundos y la promesa se cumplió");
});
promesa2.then((mensaje) => {
    console.log(mensaje, 5, "segundos y la promesa se cumplió");
});
promesa3.then((mensaje) => {
    console.log(mensaje, 10, "segundos y la promesa se cumplió");
});
promesa4.then((mensaje) => {
    console.log(mensaje, 3, "segundos y la promesa se cumplió");
});
promesa4.catch(error => {
    console.error('Ocurrió un error:', error.message);
  });

console.log(promesa);
console.log(promesa2);
console.log(promesa3);
console.log(promesa4)



/* Crear una función con el nombre crearPromesa.
La función crearPromesa retorna una nueva Promise que se va a resolver a los 5 segundos llamando a la función onSuccess.
Crear una variable con el nombre promesa y asignar el valor retornado por la función crearPromesa.
A los 5 segundos se debería mostrar un mensaje de éxito.
Manejar el caso donde la promesa sea exitosa.
Pasaron 5 segundos y la promesa fue exitosa
Modificar la función crearPromesa para que acepte un parámetro con el nombre de delay y que este sea la cantidad de segundos que tarda la promesa en resolverse.
Probar con los siguientes valores:
5 segundos
1 segundo
10 segundos
Outcome esperado:
Paso 1 segundos y la promesa fue exitosa
Pasaron 5 segundos y la promesa fue exitosa
Pasaron 10 segundos y la promesa fue exitosa
Modificar el código para que la función crearPromesa ahora acepte un segundo parámetro también con el nombre de tieneError.
Por defecto el parámetro tieneError tiene el valor false.
En caso de tener error la promesa debe no resolverse.
Manejar el caso catch para esa promesa.
Llamar la promesa con los siguientes valores:
5 segundos
1 segundo
10 segundos
3 segundos con error (Usando catch)
Paso 1 segundos y la promesa fue exitosa
Pasaron 3 segundos y la no promesa fue exitosa
Pasaron 5 segundos y la promesa fue exitosa
Pasaron 10 segundos y la promesa fue exitosa */ 