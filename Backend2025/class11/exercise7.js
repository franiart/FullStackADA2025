/*
Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.
*/

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let operation = prompt("Ingrese la operación matemática a realizar (suma, resta, multiplicación, división): ")
let result;

switch (operation) {
    case "suma":
        result = num1 + num2;
        console.log(`El resultado de la suma es: ${result}`);
        break;
    case "resta":
        result = num1 - num2;
        console.log(`El resultado de la resta es: ${result}`);
        break;
    case "multiplicacion":
        result = num1 * num2;
        console.log(`El resultado de la multiplicación es: ${result}`);
        break;
    case "division":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`El resultado de la división es: ${result}`);
        } else {
            console.log("Error: No se puede dividir por cero");
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingrese una operación válida (suma, resta, multiplicacion, division)");
}
