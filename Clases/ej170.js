function contar() {
    let contador = 0;
    return function () {
        contador++;
        console.log(contador);
    };
}

const incrementar = contar();
incrementar();
incrementar();
incrementar();
incrementar();

//la funcion contar tiene declarada una variable interna y
//una funcion interna que usa esa variable 
// luego afuera de la funcion se declara una variable que 
// se iguala a la funcion y se llama a la variable varias veces