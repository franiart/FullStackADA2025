/*
Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.
*/
const prompt = require('prompt-sync')();
let condicion1, condicion2;

condicion1 = prompt("Ingrese un valor (true/false): ");
condicion2 = prompt("Ingrese un valor (true/false): ");

console.log(condicion1 && condicion2);
console.log(condicion1 || condicion2);
console.log(!condicion1);
console.log(!condicion2);



