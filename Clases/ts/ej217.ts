function mostrarDatosDeLaColeccion(data: unknown) {
const animal = (data as [Animal])
animal.forEach((data) =>
    console.log(`Raza: ${data.raza}\nMuerde: ${data.muerde}\nColor: ${data.color}`)
)
}

interface Animal {
    raza: string,
    muerde: boolean,
    color: string[]
};

const animales: Animal[] = [
  {
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
},
 {
    raza: "Persa",
    muerde: false,
    color: ["marron", "blanco"],
},

 {
    raza: "León Africano",
    muerde: true,
    color: ["marron", "negro"],
}
];

mostrarDatosDeLaColeccion(animales)

export default {}