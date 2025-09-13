/*
Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado.
*/

const prompt = require('prompt-sync')();

const N = parseInt(prompt("Ingrese un número natural límite N: "));
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log(`La suma de los primeros ${N} números naturales es: ${sum}`);