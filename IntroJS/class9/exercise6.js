/*
Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.
*/

const prompt = require('prompt-sync')();

let age = parseInt(prompt("Ingrese su edad: "));

if ( age >= 18 ){
    console.log("El usuario es mayor de edad");
} else {
    console.log("El usuario es menor de edad");
}