/*
Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras.
*/

const prompt = require('prompt-sync')();

let number = parseInt(prompt("Ingrese un número natural de hasta 2 cifras: "));

if (number >= 0 && number <= 9) {
    let toTwoDigits = 10 - number;
    console.log(`Le faltan ${toTwoDigits} para ser un número de 2 cifras.`);
} else if (number >= 10 && number <= 99) {
    let toThreeDigits = 100 - number;
    console.log(`Le faltan ${toThreeDigits} para ser un número de 3 cifras.`);
} else {
    console.log("Por favor, ingrese un número válido de hasta 2 cifras.");
}

