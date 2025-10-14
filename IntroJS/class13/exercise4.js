/*
Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva
"Es par" si el número es par o "Es impar" si el número es impar. Usa una
variable local para guardar el resultado.
*/

const prompt = require("prompt-sync")();

function esPar(num) {
    if (num % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

let num = parseInt(prompt("Ingrese un número: "));
esPar(num);