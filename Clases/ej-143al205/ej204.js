const persona = {
    nombre: "Sofía",
    apellido: "delmonte",
    saludar: function () {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
    
};

persona.dni = 50422416;
persona.profesion = "Peluquera";
persona.tomaMate = true;


for (const key in persona) {
    if (typeof persona[key] === 'function') {
        persona[key]();
    } else {
        console.log(`${key}: ${persona[key]}.`)
    }
}

