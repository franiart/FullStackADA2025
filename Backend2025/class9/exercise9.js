/*
Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.
*/

const prompt = require('prompt-sync')();

let radiusCircle = parseFloat(prompt("Ingrese el radio de un círculo: "));

const PI = 3.14159;
let area = PI * (radiusCircle ** 2);
let perimeter = 2 * PI * radiusCircle;

console.log(`El círculo de radio ${radiusCircle}, posee un área igual a ${area} y perimetro igual a ${perimeter}`)