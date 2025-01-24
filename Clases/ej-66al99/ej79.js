let numero = 0;
let suma = 0;


do {
    suma += numero;
    console.log(`la suma parcial de ${numero} es ${suma}`);
    numero++;
}
while (numero <= 1000) {
    suma += numero;
    console.log(`la suma parcial de ${numero} es ${suma}`);
    numero++;
}