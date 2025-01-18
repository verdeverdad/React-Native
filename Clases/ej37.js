// Crear un documento con el nombre ej37.js
// Declarar las variables promedioParaAprobar y promedioDelAlumno
// Asignar a promedioParaAprobar el valor 6
// Asignar a promedioDelAlumno el valor 4
// Mostrar en consola los siguientes mensajes:
// El alumno tiene un promedio mayor o igual al requerido: verdadero/falso
// Al alumno le faltaron ${puntos} para aprobar

let promedioParaAprobar = 6;
let promedioDelAlumno = 4;
let puntos = promedioParaAprobar - promedioDelAlumno;
console.log("El alumno tiene un promedio mayor o igual al requerido: ", promedioDelAlumno >= promedioParaAprobar);
console.log(`Al alumno le faltaron ${puntos} para aprobar`);