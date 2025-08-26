/*
Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al
usuario un número y determine si es par o impar. Muestra un mensaje
explicativo indicando qué significa cada caso.
*/

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Ingrese un número:"));
let message;

if (num % 2 === 0) {
    message = `El número ${num}, es par`;
} else {
    message = `El número ${num}, es impar`;  
}

console.log(message);
