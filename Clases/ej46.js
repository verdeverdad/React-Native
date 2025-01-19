let usuarioYPassword = 'pepito2017,12345';
let nombreDeUsuario = usuarioYPassword.substring(0, 10);
let contraseña = usuarioYPassword.substring(11, 17)

console.log(`El usuario ${nombreDeUsuario} tiene ${contraseña} como contraseña`);