/*
Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos
nombres (nombre y apellido) como parámetros y devuelva el nombre
completo concatenado.
*/

const prompt = require("prompt-sync")();

const concatenarNombres = (nombre, apellido) => {
    return nombre + " " + apellido;
}

let nombre = prompt("Ingrese el nombre: ");
let apellido = prompt("Ingrese el apellido: ");
console.log(`El nombre completo es: ${concatenarNombres(nombre, apellido)}`);