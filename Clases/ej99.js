let a = 0;
let b = 2;

console.log(a);
for (i = 0; i < 10000; i++) {
 if( a % 2 === 0 &&  b % 2 === 0){
    let c = a + b;
    a = b;
    b = c;
    if (i < 10) {

        console.log(c);
    } else {
        break;
    }
}
}