/*
Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos
números como parámetros y devuelva el número mayor.
*/

const prompt = require("prompt-sync")();

const encontrarMayor = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

console.log(`El número mayor es: ${encontrarMayor(num1, num2)}`);