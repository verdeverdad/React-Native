let fibonacci = function() {
    let a = 0;
let b = 1;
let contador = 0;

do {
    console.log(a);
  let c = a + b;
  a = b;
  b = c;
  contador++;
}
while (contador < 10) {
  let c = a + b;
  a = b;
  b = c;
  contador++;
}
}

fibonacci()