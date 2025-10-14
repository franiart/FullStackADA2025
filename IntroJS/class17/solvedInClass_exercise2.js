/*
Ejercicio Resuelto en clase (2): Cálculo de descuento por edad
Solicita al usuario su edad y usa una función flecha para aplicar un descuento
dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
✓ 65 anos = 15% de descuento
✓ Menor a 65 = No hay descuento
*/

const prompt = require('prompt-sync')();

let age = parseInt(prompt("Ingrese su edad: "));

let calculateDiscount = (age) => {
    if (age >= 65) {
        return "Tienes un 15% de descuento.";
    } else {
        return "No tienes descuento.";
    }
};

console.log(calculateDiscount(age));