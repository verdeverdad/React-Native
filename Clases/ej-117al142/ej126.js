const gustosDeHelado = [];

gustosDeHelado.push("Dulce de leche");
gustosDeHelado.push("Chocolate");
gustosDeHelado.push("Tiramisu");
gustosDeHelado.push("Sambayon");
gustosDeHelado.push("Queso mascarpone");
gustosDeHelado.push("Vainilla");
gustosDeHelado.push("Limon");
gustosDeHelado.push("Frutilla");
gustosDeHelado.push("Frambuesa");
gustosDeHelado.push("Maracuyá");

console.log(gustosDeHelado);

function agregarGustoAlInicio(lista, nuevoGusto) {
    lista.unshift(nuevoGusto);
    lista.pop();
  
    return lista
}

function agregarGustoAlFinal(lista, nuevoGusto) {
    lista.push(nuevoGusto);
    lista.shift();
  
    return lista
}
console.log(agregarGustoAlInicio(gustosDeHelado, gustosDeHelado[9]))
console.log(agregarGustoAlInicio(gustosDeHelado, gustosDeHelado[9]))