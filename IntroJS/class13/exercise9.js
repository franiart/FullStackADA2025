/*
Ejercicio 9: Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y
use un bucle para imprimir todos los números desde 1 hasta ese número.
*/

const prompt = require("prompt-sync")();

function contarHasta(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

let num = parseInt(prompt("Ingrese un número: "));
contarHasta(num);