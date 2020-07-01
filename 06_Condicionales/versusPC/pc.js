// -----------Challenge con computadora-------------------

var userAnswer = prompt('Escoge piedra, papel o tijera').toLowerCase()

//Math  --> nos permite acceder a funciones matematicas en JS
//.floor() ----> nos regresa numero enteros

var options  = Math.floor((Math.random() * 3) + 1)
var pcAnswer = ''

// piedra = 1
// papel = 2
// tijera = 3

if(options === 1){ pcAnswer = 'piedra' }
if(options === 2){ pcAnswer = 'papel' }
if(options === 3){ pcAnswer = 'tijera' }

    if(userAnswer === pcAnswer){
        console.log('Es un empate')
    }else if(userAnswer === 'papel' && pcAnswer === 'piedra' || userAnswer === 'tijera' && pcAnswer === 'papel' || userAnswer === 'piedra' && pcAnswer === 'tijera' ){
        console.log('Gana Usuario porque : ' + userAnswer + ' vence a : ' + pcAnswer)
    }else if(pcAnswer === 'papel' && userAnswer === 'piedra' || userAnswer === 'tijera' &&userAnswer === 'papel' || pcAnswer === 'piedra' && userAnswer === 'tijera'){
        console.log('Gana PC porque : ' + pcAnswer+ ' vence a : ' + userAnswer )
    }else{
        console.error('Ingresaste mal los datos')
    }


// var x = 10
// console.log(x)
//  x = 50
// console.log(x)
// x = 'Hola xd'
// console.log(x)