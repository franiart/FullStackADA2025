/*
Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y
muéstrala. Finalmente, muestra la lista actualizada.
*/

let pets = ["Perro", "Gato", "Conejo"];
pets.unshift("Hámster");
console.log(`Fila actual de mascotas: ${pets}`);

let attendedPet = pets.shift();
console.log(`La mascota atendida es: ${attendedPet}`);
console.log(`Estado actualizado de la fila: ${pets}`);

