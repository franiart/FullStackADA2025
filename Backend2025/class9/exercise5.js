/*
Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.
*/

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese un primer número: "));
let num2 = parseFloat(prompt("Ingrese un segundo número: "));
let num3 = parseFloat(prompt("Ingrese un tercer número: "));

if (num1 > num2 && num1 > num3){
    console.log(`De los 3 números ingresados; número 1: ${num1}, número 2: ${num2} y número 3: ${num3}, el mayor de todos es el número 1`)
} else if (num2 > num1 && num2 > num3){
    console.log(`De los 3 números ingresados; número 1: ${num1}, número 2: ${num2} y número 3: ${num3}, el mayor de todos es el número 2`)
} else{
    console.log(`De los 3 números ingresados; número 1: ${num1}, número 2: ${num2} y número 3: ${num3}, el mayor de todos es el número 3`)
}