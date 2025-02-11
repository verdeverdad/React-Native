function cantidadDeCaracteres(texto) {
    // Si el texto es undefined o null, se asigna una cadena vacía
    texto = texto || "";
    console.log(`La cadena "${texto}" tiene ${texto.length} caracteres.`);
  }
  
  // Llamadas a la función con diferentes valores
  cantidadDeCaracteres("perro");
  cantidadDeCaracteres("");
  cantidadDeCaracteres(undefined);