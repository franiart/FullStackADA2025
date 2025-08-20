/*
Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.
*/
const prompt = require('prompt-sync')();

let nombre;
nombre = prompt("Ingresa tu nombre: ");

if (nombre === "Fran"){
    console.log("El nombre del usuario es igual a mi nombre");
} else {
    console.log("El nombre del usuario no es igual a mi nombre");
}