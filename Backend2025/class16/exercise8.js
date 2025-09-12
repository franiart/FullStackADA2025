/*
Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
devolverlo.
*/

let namesList = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let foundName = namesList.find(name => name === 'Laura');

console.log(`El nombre encontrado en la lista ${namesList} es: ${foundName}`);