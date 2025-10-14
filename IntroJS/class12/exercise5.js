/*
Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)
*/

const prompt = require('prompt-sync')();

let names = [];

for (let i = 0; i < 5; i++) {
    let name = prompt(`Ingrese el nombre ${i + 1}: `);
    names.push(name);
}

let searchName = prompt('Ingrese un nombre para buscar: ');

if (names.includes(searchName)) {
    console.log(`${searchName} se encuentra en el array.`);
} else {
    console.log(`${searchName} no se encuentra en el array.`);
}
