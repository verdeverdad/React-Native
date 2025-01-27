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
  console.log(lista);
  lista.reverse()
    return  lista
}


console.log(agregarGustoAlInicio(gustosDeHelado, gustosDeHelado[9]));

let nuevaLista = agregarGustoAlInicio(gustosDeHelado, gustosDeHelado[9]);
let listaSinStock = [];
console.log(nuevaLista);

listaSinStock = nuevaLista.slice(0, 2);
nuevaLista = nuevaLista.slice(2, 10)
console.log(listaSinStock);
console.log(nuevaLista);