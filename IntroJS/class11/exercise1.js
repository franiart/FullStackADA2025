/*
Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso.
*/
const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Ingrese un número:"));
let message;

if (num > 0) {
    message = `El número ${num}, es positivo`;
} else if (num < 0) {
    message = `El número ${num}, es negativo`;
} else {
    message = `El número ${num}, es cero`;
}   

console.log(message);