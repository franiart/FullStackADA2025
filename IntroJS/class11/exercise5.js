/*
Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el
programa debe mostrar un mensaje indicando que los valores son inválidos.
*/

const prompt = require('prompt-sync')();

let start = parseInt(prompt("Ingrese el número inicial: "));
let end = parseInt(prompt("Ingrese el número final: "));

if (start > end) {
    console.log("Los valores son inválidos. El número inicial debe ser menor o igual al número final");
}   else {
    console.log(`Los números pares entre ${start} y ${end}, son: `);
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
