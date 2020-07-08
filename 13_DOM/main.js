// accedemos a la etiqueta por medio de un ID
let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let pregunta = document.getElementById('pregunta')
let respuesta = document.getElementById('respuesta')
let boton = document.getElementById('btn')


// console.log(titulo)
// console.log(subtitulo)

// forma antiugua
const saludar = () => {
    alert('Hola mundo!')
}




const cambiar = ()  => {
    
    respuesta.innerHTML = pregunta.value
    titulo.innerHTML = 'Me cambie desde la terminal'
    subtitulo.innerHTML = 'Me cambie x2'
    
}

boton.addEventListener('click', cambiar)






