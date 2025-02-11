const contador = (function () {
    let acumulador = 0
    return {
        increment: function () {
            acumulador++;
        },
        decrement: function () {
            acumulador - 1;
        },
        getCount: function () {
            return acumulador;
        },
        reset: function () {
            acumulador = 0;
        }
    };
})();

contador.increment(); // Incrementa en 1
console.log(contador.getCount()) // Muestra 1 en pantalla
contador.increment(); // Incrementa en 1
console.log(contador.getCount()) // Muestra 2 en pantalla


// Nuevo código
contador.decrement();
console.log(contador.getCount()); // Imprime: 1
contador.reset();
console.log(contador.getCount()); // Imprime: 0

//NO SE PUEDE ACCEDER A LA VARIABLE ACUMULADOR DESDE FUERA DE LA FUNCION