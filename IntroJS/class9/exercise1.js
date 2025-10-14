/*
Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.
*/

const prompt = require('prompt-sync')();

let numero1, numero2
numero1 = parseFloat(prompt("Ingrese un número: "));
numero2 = parseFloat(prompt("ingrese otro número: "));

if (numero1 > numero2){
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2){
    console.log(`El número ${numero1} es menor que ${numero2}`);
} else {
    console.log(`El número ${numero1} es igual que ${numero2}`);
}