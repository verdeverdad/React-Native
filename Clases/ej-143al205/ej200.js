const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this);
      console.log(this.nombre);
    },
    saludar2: () => {
      console.log(this);
    },
  };

  //En este caso las tres veces que aparece this hace referencia al objeto persona, en 
  // el caso de la arrow function tambien porque hacen referencia al objeto
  //  donde se encuentra