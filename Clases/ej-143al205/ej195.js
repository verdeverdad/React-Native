const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan, Pablo, Char"],
    leGustaJavaScript: true,
  };

  const estadoAlumno = {
    nombre: "Sofía",
    apellido: "Delmonte",
    amigos: ["Valeria, Yanet, Miskyla"]
  }

  let nuevoEstado = {
    ...estadoProfesor, // Incluye las propiedades de estadoProfesor
    ...estadoAlumno,   // Sobrescribe las propiedades coincidentes con estadoAlumno
  }

  console.log(nuevoEstado)