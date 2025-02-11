function saludar() {
    console.log(this);
  }
  
  saludar();

  //this en este caso hace referencia al scope global
  //cuando usamos call despues de una funcion el primer parametro que le pasemos es en donde se va 
//   a usar el this

// cuando usamos apply es el primer parametro a quien va a hacer la referencia this y el segundo parametro es un array de parametros

//bind crea una nueva funcion 