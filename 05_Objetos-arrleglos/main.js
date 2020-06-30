// alert("funciona")

// ----------------------- Arreglos -----------------------

// undefined = el valor a mostrar es indefinido
// null = nada
// NaN = not a number

// es una coleccion de datos (cualquiera)

var colores = ["azul", "rojo", "rosa", "morado", "verde"];
    // index    0        1      2        3         4
var consolas = ["ps5", "switch", "xbox"];

// console.log(colores[0]);
// console.log(consolas[3]);

// agregando elementos a mi arreglo

colores.push("blanco");
colores.push("negro");

// console.log(colores);

// eliminar el último elemento
colores.pop(); // no es necesario pasar ningún valor
colores.pop(); // no es necesario pasar ningún valor

// eliminar elemento específico
colores.splice(2,1);

var nombres = ["luis a.", "luis o." , "luis u"];

nombres.splice(1);

// console.log(nombres);

// ----------------------- Objectos ------------------------------


var persona = {
    nombre: "Ricardo",
    direccion: "CDMX",
    telefono: "5135476324",
    edad: 22,
    musica: {
        metal: ["pantera", "metalica" ],
        pop: ["k-pop", "Julieta Venegas"],
        banda: ["Banda MS", "Banda Sonora"],
        trap: ["Duki", "Kidd Keo"],
        cumbias: ["los Angeles azules", "Cubia Metalera"]
    },
    peliculas : {
        terror : {
            thrillerPsicologico : "Terror",
            toy: "Chuky"
        },
        accion: {
            carreras : ["rf1", "rf2", "rf3","rf4","rf5","rf6"],
            disparos: ["Duro de matar","MI", "Los indestructibles"]
        }
    }
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
//Los metodos funcionan igual, solo hay que acceder al arreglo conrrespondiente
// persona.musica.banda.push("El recodito")
console.log(persona.musica.banda)
console.log(persona.peliculas.accion.disparos[2])

