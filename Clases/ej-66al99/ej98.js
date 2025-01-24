let a = 0;
let b = 1;

console.log(a);
for (i = 0; i < 1000; i++) {

    let c = a + b;
    a = b;
    b = c;
    if (i < 100) {

        console.log(c);
    } else {
        break;
    }
}