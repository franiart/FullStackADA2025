/*
Ejercicio 4: Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array.
Pista: Usa un ciclo
*/

let evenNumbers = [];
for (let i = 0; i <= 100; i += 2) {
    evenNumbers.push(i);
}

console.log("Números pares del 0 al 100:", evenNumbers);