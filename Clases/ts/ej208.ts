function sumarNumeros(inicio: number, fin: number): string {
    let suma: number = 0;
    let numeros: Array<number> = []
    for (let i = inicio; i <= fin; i++) {
        numeros.push(i)
    }

    numeros.forEach(numero => {
        suma += numero;
      });
      let resultadoString: string = suma.toString()
      console.log("La suma es: " + resultadoString)
   return resultadoString
}

sumarNumeros(0, 10);
sumarNumeros(20, 30);
sumarNumeros(5,50)
sumarNumeros(10, 20);

export default {}