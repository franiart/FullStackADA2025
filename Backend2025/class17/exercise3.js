/*
Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"
*/

const prompt = require('prompt-sync')();

let secretNumber = Math.ceil(Math.random() * 10);
let userGuess = parseInt(prompt("Adivina el número secreto (entre 1 y 10): "));

if (userGuess === secretNumber) {
    console.log("Felicitaciones, ¡ese era!");
} else {
    console.log(`Lo siento, ¡intenta nuevamente! El número era ${secretNumber}.`);
}

