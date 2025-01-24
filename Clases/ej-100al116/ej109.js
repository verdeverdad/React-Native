function autenticarUsuario(usuario, contraseña){
  if (usuario === "nacho" && contraseña === "Nerd1979") {
    console.log(`Bienvenido ${usuario}, te estabamos esperando`)
  }
  else if (usuario === "pedro" && contraseña === "Batman0217") {
    console.log(`Bienvenido ${usuario}, te estabamos esperando`)
  } else if (usuario === "marta" && contraseña === "Madre2312") {
    console.log(`Bienvenido ${usuario}, te estabamos esperando`)
  } else {
    console.log("Por favor ingrese credenciales válidas")
  }
}

autenticarUsuario("pedro", "Batman0217");
autenticarUsuario("luis", "Batman0217")
autenticarUsuario("marta", "Madre2312")
autenticarUsuario("nacho", "Madre2312")


// Crear una función autenticarUsuario que acepte 2 parámetros usuario y password
// La función retorna un valor verdadero sólo si se cumple con las siguiente validaciones:
// Usuarios y passwords válidos:
// nacho, Nerd1979
// pedro, Batman0217
// marta, Madre2312
// El programa debe mostrar el siguiente mensaje si el usuario y password son válidos:
// Bienvenido ${usuario}, te estabamos esperando
// Sino
// Por favor ingrese credenciales válidas
// Utilizar la función autenticarUsuario para validar el usuario, intentar con distintos usuarios y passwords incluídos los que deberían funcionar bien