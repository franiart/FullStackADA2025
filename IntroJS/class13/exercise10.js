/*
Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número
y devuelva su factorial.
Fórmula del factorial:
n! = n × (n - 1) × (n - 2) × ... × 1
*/

const prompt = require("prompt-sync")();

const calcularFactorial = (num) => {
    if (num < 0) {
        return "Factorial no está definido para números negativos";
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let numFactorial = 1;
    for (let i = 2; i <= num; i++) {
        numFactorial *= i;
    }
    return numFactorial;
};

let num = parseInt(prompt("Ingrese un número para calcular su factorial: "));
console.log(`El factorial de ${num} es ${calcularFactorial(num)}.`);