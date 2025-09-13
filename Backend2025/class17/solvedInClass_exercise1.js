/*
Ejercicio Resuelto en clase (1): Calculando la edad
Escribí un programa que le pida al usuario su año de nacimiento e imprima
su edad actual en la consola con la frase "Tienes X años" (siendo X la
cantidad de años). Por ejemplo, asumiendo que el año actual es 2024 y el
usuario ingresa 1998, el programa debe imprimir en la consola: “Tienes 26
años”.
*/

const prompt = require('prompt-sync')();

let birthYear = parseInt(prompt("Por favor, ingresa tu año de nacimiento: "));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log(`Tienes ${age} años.`);