// Declaramos las variables para los nombres de las propiedades
const propiedad1 = 'nombre';
const propiedad2 = 'edad';

// Creamos el objeto persona y asignamos los valores
const persona = {
  [propiedad1]: 'Sofía', 
  [propiedad2]: 33 
};

// Mostramos los valores utilizando corchetes
console.log(persona['nombre']);
console.log(persona['edad']);

// Mostramos los valores utilizando las variables propiedad1 y propiedad2
console.log(persona[propiedad1]);
console.log(persona[propiedad2]);