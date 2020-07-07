// var num1 = 10
// var num2 = 50

// console.log(num1 + num2)

// function suma (x, y) {
//     console.log( 'parametro x :'+ x)
//     console.log( 'parametro y :'+ y)
//     console.log(x + y)
// }

// console.log('Afuera de la funcion' + x)
//   x    y
// suma(10, 10)
// suma(80, 100)
// suma(800, 800)

//VANILLA JS
var num1 = 10
// console.log(num1)
num1 = 'Hola'
// console.log(num1)

 
// var suma = function(x, y) {
//     console.log( 'parametro x :'+ x)
//     console.log( 'parametro y :'+ y)
//     console.log(x + y)
// }
// console.log(suma)
// suma(10, 250)
// console.log(suma)



//ECMA5
let num2 = 50
// console.log(num2)
num2 = 'Hola xd'
// console.log(num2)


const num3 = 100
// console.log(num3)

// num3 = 'Hola xd'
// console.log(num3)

//arrow function o funciones de flecha
const salu2 = (a, b) => {
    console.log('Saludos ' + a + ' de ' + b + ' años de edad')
}

// salu2('Ricardo', 22)

//-------------------------------------------
let x = 10
let y = 0
const suma = () => {
   return x  + y
}


console.log(suma(x, y))
// suma(10, 50) // ---> 60

// suma(suma(10, 50), 40) //----> 100

// console.log(suma(suma(10, 50), 40))


//----------------------> Challege <---------------------

// arrow fuction
// funcion para el area del cuadrado
// funcion para area del rectuangulo
// funcion para el area de un triangulo


const cuadrado = (lado) => {
    console.log(lado * lado)
}
cuadrado(5, 10
    )
const rectangulo = (base, altura) => {
    console.log(base * altura)
}
rectangulo(50,40)

const triangulo = (base, altura) => {
    console.log((base * altura) / 2)
}
triangulo(80, 50)