function funcionQueTiraError() {
    throw new Error("No se puede dividir por 0");
}
try {
    function dividir(num1, num2) {
        if (num2 === 0) {
            funcionQueTiraError()
        } else {
            return num1 / num2
        }

    }
} catch (error) {
    console.log(`Mostramos el error: ${error}`);
}

console.log(dividir(10, 2));
console.log(dividir(15, 3));
 console.log(dividir(10, 0));