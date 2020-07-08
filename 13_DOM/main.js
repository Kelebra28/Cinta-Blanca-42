// accedemos a la etiqueta por medio de un ID
let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let boton = document.getElementById('btn')

// console.log(titulo)
// console.log(subtitulo)

const cambiar = ()  => {
    
    titulo.innerHTML = 'Me cambie desde la terminal'
    subtitulo.innerHTML = 'Me cambie x2'
    
}

boton.addEventListener('click', cambiar)



// forma antiugua
const saludar = () => {
    alert('Hola mundo!')
}



