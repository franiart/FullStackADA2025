/*
Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos.
*/

const prompt = require('prompt-sync')();

let dollars = parseFloat(prompt("Ingrese el monto en dólares: "));
let exchangeRate = parseFloat(prompt("Ingrese la tasa de cambio a pesos: "));

let convertToPesos = (dollars, rate) => dollars * rate;
let pesos = convertToPesos(dollars, exchangeRate);


console.log(`${dollars} dólares es igual a: ${pesos} pesos`);