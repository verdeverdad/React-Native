let aritmetica = {
    suma: function (num1, num2) {
        if (typeof(num1) === "number" && typeof(num2) === "number"){
        console.log(num1 + num2);}
    },
    resta: function (num3, num4) {
        if (typeof(num3) === "number" && typeof(num4) === "number"){
        console.log(num3 - num4) ;
        }
    },
    multiplicar: function (num5, num6) {
        if (typeof(num5) === "number" && typeof(num6) === "number"){
        console.log(num5 * num6) }
    },
    dividir: function (num7, num8) {
        if (typeof(num7) === "number" && typeof(num8) === "number"){
        console.log(num7 / num8) }
    },
    mostrarModulo: function (num10, num9) {
        if (typeof(num10) === "number" && typeof(num9) === "number"){
        console.log(num10 % num9)}
    }
}


aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);