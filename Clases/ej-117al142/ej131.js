const alumnas = [
    "Sofia",
    "Mara",
    "Catalina",
    "Silvia",
    "Florencia"
]

const alumnos = [
    "Diego",
    "Santiago",
    "Camilo",
    "Nicolás",
    "Pablo"
]

const totalAlumnos = alumnas.concat(alumnos);
console.log(totalAlumnos);
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let i = 0;

while (i < alumnos.length) {
  console.log(alumnos[i]);
  i++;
}

for (let i = 0; i < totalAlumnos.length; i++) {
    console.log(totalAlumnos[i]);
  }