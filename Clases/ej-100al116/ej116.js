function mejorJugadorArgentino(numero) {
    let nombre = ""
    switch (numero) {
        case 2:
            nombre = "Sergio Batista";
            break
        case 5:
            nombre = "José Luis Brown";
            break
        case 7:
            nombre = "Jorge Burruchaga";
            break
        case 9:
            nombre = "José Cuciuffo";
            break
        case 10:
            nombre = "Diego Armando Maradona";
            break
        case 11:
            nombre = "Jorge Valdano";
            break
        case 12:
            nombre = "Héctor Enrique";
            break
        case 14:
            nombre = "Ricardo Giusti";
            break
        case 16:
            nombre = "Julio Olarticoechea";
        case 18:
            nombre = "Nery Pumpido";
            break
        case 19:
            nombre = "Óscar Ruggeri";
            break
        default:
            nombre = "Carlos Bilardo";
            break


    }
     return nombre;
}
 console.log(mejorJugadorArgentino(2))
// Crear un documento con el nombre ej116.js
// Crear la función mejorJugadorArgentino que acepta como parámetro un número
// Esta función retorna el nombre de un jugador según el número de camiseta que utilizó en
///la selección del 86
// Utilizar la siguiente lista de jugadores:
// 18
// 5
// 9
// 19
// 14
// 16
// 2
// 12
// 7
// 10
// 11
// En caso de que se ingrese un número que no corresponde a un jugardor
// retornar el siguiente valor:
// Mostrar en consola el número pasado como parámetro y el nombre del jugador retornado
// ejemplo: Si pasamos 10 como parámetro obtenemos Diego Armando Maradona como valor de retorno.
// Mostrar en consola: 10, Diego Armando Maradona