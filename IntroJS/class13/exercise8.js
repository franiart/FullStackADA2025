/*
Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
Fórmula: (C * 9/5) + 32
*/

const prompt = require("prompt-sync")();

const convertirCelsiusAFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
console.log(`${celsius}°C son ${convertirCelsiusAFahrenheit(celsius)}°F.`);