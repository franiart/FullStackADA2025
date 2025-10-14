/*
Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un
número de horas como parámetro y devuelva el total en minutos.
*/

const prompt = require("prompt-sync")();

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

let horas = parseFloat(prompt("Ingrese el número de horas: "));
console.log(`${horas} hora(s) son ${convertirHorasAMinutos(horas)} minutos.`);
