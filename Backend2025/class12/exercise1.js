/*
Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente
hasta que el usuario ingrese un número negativo. Luego, imprime la suma
de todos los números ingresados.
*/

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Ingrese un número: "));
let sum = 0;

while(num >= 0) {
    sum += num;
    num = parseFloat(prompt("Ingrese otro número: "));
}

console.log(`La suma de todos los números ingresados es: ${sum}`);