const datos = [
    42,
    true,
    function () { return 'El significado de la vida es: ' }
]

function mensaje() {
    if (datos[1] === true) {
        console.log(datos[2]() + datos[0])
    }
}
console.log(datos[2]() + datos[0])
