// alert("funciona")

// Arreglos

// undefined = el valor a mostrar es indefinido
// null = nada
// NaN = not a number

// es una coleccion de datos (cualquiera)

var colores = ["azul", "rojo", "rosa", "morado", "verde"];
    // index    0        1      2        3         4
var consolas = ["ps5", "switch", "xbox"];

console.log(colores[0]);
console.log(consolas[3]);

// agregando elementos a mi arreglo

colores.push("blanco");
colores.push("negro");

console.log(colores);

// eliminar el último elemento
colores.pop(); // no es necesario pasar ningún valor
colores.pop(); // no es necesario pasar ningún valor

// eliminar elemento específico
colores.splice(2,1);

var nombres = ["luis a.", "luis o." , "luis u"];

nombres.splice(1);

console.log(nombres);

