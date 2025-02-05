const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function (danio) {
        if (this.energia > 0) {
            return this.energia - danio;
        } else {
            if (vidas > 0) {
                return this.vidas - 1;
            } else {
                return "Game Over"
            }
        }
    },
    ganarEnergia: function (energiaRecuperada) {
        if (jugador.energia <= 100 && jugador.energia >= 0) {
            return this.energia = this.energia + energiaRecuperada;
        } else if (this.energia >= 100){
            jugador.vidas = jugador.vidas + 1
        }
    },
    perderVidas: function () {
        if (this.vidas > 1){
            return jugador.vidas = jugador.vidas - 1
        } else {
            return "Game Over"
        }
    },
    ganarVidas: function () {
        if (this.vidas < 99 ){
            return jugador.vidas = jugador.vidas + 1}
    } 
}
jugador.nombre = "Messi"
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.perderVidas()} vidas`)// El jugador pierde una vida
console.log( ` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(10)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 10 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(5)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 5 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(15)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 15 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(20)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 20 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.ganarEnergia(10)}% de energía y ${jugador.vidas} vidas`)// El jugador recupera 10 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(30)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 30 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.perderEnergia(40)}% de energía y ${jugador.vidas} vidas`)// El jugador pierde 40 de energía
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.perderVidas()} vidas`)// El jugador pierde una vida
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.perderVidas()} vidas`)// El jugador pierde una vida
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.ganarVidas()} vidas`)// El jugador gana una vida
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.ganarVidas()} vidas`)// El jugador gana una vida
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.ganarVidas()} vidas`)// El jugador gana una vida
console.log(` El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.perderVidas()} vidas`)// El jugador pierde una vida