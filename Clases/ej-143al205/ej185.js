let contador = 1;

function mostrarMensaje() {
    if (contador <= 10) {
        console.log(`Pasaron ${contador} segundos.`);
        contador++;
    }
}
//setInterval(mostrarMensaje, 1000);

let segundosTranscurridos = 0;
const intervalo = setInterval(() => {
    console.log('*'.repeat(segundosTranscurridos));
    segundosTranscurridos++;
  
    if (segundosTranscurridos > 10) {
      clearInterval(intervalo);
    }
  }, 1000);
