/*
Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
los intentos restantes. Si no acierta después de los 3 intentos, muestra el
número secreto. Usa un for para resolver este ejercicio.
*/

const prompt = require('prompt-sync')();

let numSecret = Math.ceil(Math.random() * 10);
let attempts = 3;

console.log("Adivina el número secreto entre 1 y 10. Tienes 3 intentos");

for (let i = 1; i <= attempts; i++) {
    let numUser = parseInt(prompt(`Intento ${i}: Ingrese su número: `));
    if (numUser === numSecret) {
        console.log("¡Felicidades! Adivinaste el número secreto");
        break;
    } else {
        console.log("Número incorrecto. Intenta de nuevo");
    }
    
    if (i === attempts) {
        console.log(`Lo siento, ya no hay más intentos. El número secreto era ${numSecret}`);
    }
}



