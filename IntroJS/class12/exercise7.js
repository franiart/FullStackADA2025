/*
Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivos. Luego, escribe un algoritmo para sumar todos
los números en la matriz.
*/

let matriz = [
    [2, 4, 7, 10, 12],
    [1, 3, 5, 8, 11],
    [6, 9, 13, 14, 15],
    [16, 18, 20, 22, 24],
    [17, 19, 21, 23, 25]
];

let sum = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        sum += matriz[i][j];
    }
}
console.log("La suma de todos los números en la matriz es: " + sum);

