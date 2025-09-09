/*
Ejercicio 9: Eliminar espacios innecesarios
Tienes la siguiente cadena con espacios adicionales
" Hola, mundo! "
Elimina los espacios al inicio y al final y muestra la cadena resultante.
*/

let stringWithSpaces = "   Hola, mundo!   ";
let trimmedString = stringWithSpaces.trim();
console.log(`Cadena sin espacios innecesarios: "${trimmedString}"`);