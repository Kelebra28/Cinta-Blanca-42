

// Challenge normal 
var player1 = prompt('P1 ¿Piedra, papel o tijera?').toLowerCase()
var player2 = prompt('P2 ¿Piedra, papel o tijera?').toLowerCase()

//  toLoweCase() ---> pasa el texto a miniscula
// var p1Real = player1.toLowerCase()
// console.log(p1Real)

// to UpperCase() ---> pasa el texto a mayuscula
// console.log(player1.toUpperCase())
// console.log(player2)

if(player1 === player2){
    console.log('Es un empate')
}else if (player1 === 'papel' && player2 === 'piedra' || player1 === 'tijera' && player2 === 'papel' || player1 === 'piedra' && player2 === 'tijera' ){
    console.log('Gana player1 porque ' + player1 + ' vence a ' + player2)
}else if(player2 === 'papel' && player1 === 'piedra' || player2 === 'tijera' && player1 === 'papel' || player2 === 'piedra' && player1 === 'tijera'){
    console.log('Gana player2 porque ' + player2 + ' vence a ' + player1)
}else{
    console.error('Error al ingresar los datos')
}


