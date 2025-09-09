/*
Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El
último invitado no puede asistir. Elimina al último invitado y muestra quién
fue eliminado y el estado actualizado de la lista.
*/

let guests = ["Ana", "Juan", "Carlos", "Sofía"];
let removedGuest = guests.pop();
console.log(`El invitado eliminado es: ${removedGuest}`);
console.log(`Estado actualizado de la lista: ${guests}`);