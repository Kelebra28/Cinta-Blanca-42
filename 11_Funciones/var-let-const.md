# Cuando utilizar var, let o const.
Las variables son utilizadas para guardar valores en un pedazo de la memoria chache, la cual nos permite utilizar estos valores a lo largo de nuestro codigo.
JavaScript tiene 3 diferentes formas de declarar variables, es por eso que vamos a explicar que es cada una, cuando utilizarla y las diferencias entre ellas.
```js
var num1 = 10;
let num2 = 100;
const num3 = 1000;
```
## var
La variable *var* declara una variable con scope de función y puede empezar con un valor o no.
```js
var flor;
var nombre = 'Ricardo';
if(true){
    var nombre = 'Raul';
    console.log(nombre) // -> Raul
}
console.log(nombre) // -> Raul
```
```js
var nombre = 'Ricardo';
function mostrarNombre() {
    var nombre = 'Raul'
    console.log(name) // -> Raul
}  
mostrarNombre()
console.log(nombre) // -> Ricardo
```
Tambien puede ser reasignada sin singún incinveniente, hasta puede ser redeclarada.
```js
var num1 = 10;
       console.log(num1);// -> 10 
    num1 = 50;
        console.log(num1); // -> 50
var num1 = '45647864';
        console.log(num1); // -> '45647864'
```
## let
La variable *let* tiene un scope de bloque, puede empezar con un valor o no.
```js
let flor;
let nombre = 'Ricardo';
if(true){
    let nombre = 'Raul';
    console.log(nombre) // -> Raul
}
console.log(nombre) // -> Ricardo
```
```js
let  nombre = 'Ricardo';
function mostrarNombre() {
    let  nombre = 'Raul'
    if(true){
        let nombre = 'Brian';
        console.log(nombre) // -> Brian
    }
 console.log(name) // -> Raul
}  
mostrarNombre()
console.log(nombre) // -> Ricardo
```
Esta forma de declarar una varibale puede ser reasignada pero no puede ser redeclarada.
```js
let num1 = 10
    console.log(num1) // -> 10
    num1 = 'numero'
    console.log(num1) // -> numero
 //Error
 let num1 = 100 // -> num1 has been declared   
```
## const
*const* declara una variable con scope de bloque. Esta debe de tener un valor inicial, su valor iniciar no se puede reasignar ni se puede ser redeclarada.
```js
const nombre = 'Ricardo';
function mostrarNombre() {
    const  nombre = 'Raul'
    if(true){
        const nombre = 'Brian';
        console.log(nombre) // -> Brian
    }
 console.log(name) // -> Raul
}  
mostrarNombre()
console.log(nombre) // -> Ricardo
// Error
const flor; // error -> Missing initializer in const declaration
const bebida = 'Refresco';
    bebida = 'cerbeza' // error -> Assigment to constant variable
const bebida = 'tequila' // -> Identifier 'bebida' has already been declared
```