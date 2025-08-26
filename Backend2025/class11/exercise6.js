/*
Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.
*/

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`Tabla de multiplicar del ${num}: ${num} x ${i} = ${result}`);
}