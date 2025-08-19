/*
Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.
*/

const prompt = require('prompt-sync')();

const RANGO_MAXIMO = 20;
const RANGO_MINIMO = 10;

let num = parseFloat(prompt("Ingrese un número: "));

if (num <= RANGO_MAXIMO && num >= RANGO_MINIMO){
    console.log(`El número ${num} está dentro del rango ${RANGO_MINIMO} y ${RANGO_MAXIMO}`);
} else {
    console.log(`El número ${num} no está dentro del rango ${RANGO_MINIMO} y ${RANGO_MAXIMO}`);
}