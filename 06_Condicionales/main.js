// alert('DESCARGA YAAAA!')

// if(condicion){
//     accion si es true
// } else {
//     accion si es false
// }

// < menor que
// <= manor igual
// > meyor que
// >= mayor igual
// = asigna valor ---> var nombre = 'Ricardo'
// == compara el caracter
// === compara indenticamente --> el caracter y su tipo valor



if ( 10 === '10') {
    // console.log('Es verdad')
}else {
    // console.log('Es falso')
}



//  ------------ Challenge ----------------
// Preguntar al usuario un numero
// Este numero decir si es  par o es impar


var pregunta = prompt('Ingresa un numero')

var numero = Number(pregunta)

if(numero % 2 === 0){
    console.log(numero + ': es par')
}else if(numero % 2 === 1){
    console.log(numero + ': es inpar')
}else {
    // console.log('Error al ingresar numeros')
    console.error('Error al ingresar numeros: ' + numero)
}
   