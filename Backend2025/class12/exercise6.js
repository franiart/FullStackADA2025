/*
Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000.
*/

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
]

let sum = 0;

for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        if (matriz[i][j] >= 10 && matriz[i][j] < 1000){
            sum += matriz[i][j];
        }
    }
}

console.log(`La suma de los números mayores o iguales a 10 y menores a 1000 es: ${sum}`);