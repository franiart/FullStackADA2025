/*
Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)
*/

const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Ingrese su peso en kilogramos: "));

const pounds = weight * 2.20462;
console.log(`El peso del usuario ${weight} kg es igual a ${pounds} lb`);