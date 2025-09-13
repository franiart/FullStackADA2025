/*
Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación.
*/

const prompt = require('prompt-sync')();

let petName = prompt("Ingrese el nombre de su mascota: ");
let isVaccinated = prompt("¿Está vacunada? (si/no): ");

let checkVaccinationStatus = (name, vaccinated) => {
    if (vaccinated.toLowerCase() === 'si') {
        return `${name} está vacunada.`;
    } else {
        return `${name} no está vacunada.`;
    }
};

console.log(checkVaccinationStatus(petName, isVaccinated));