function saludar(mensaje, despedida) {
    console.log(mensaje);
    despedida = despedirse()
}

function despedirse (){
    console.log("CHAUUUUU")
}

saludar("hola", despedirse)