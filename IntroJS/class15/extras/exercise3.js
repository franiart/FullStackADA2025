/*
Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son
atendidos uno por uno. Tienes una lista inicial de clientes en espera y un
bucle que los atiende de a uno. Realiza lo siguiente:
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por
consola.
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando
un mensaje especial.
3. Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
*/

let clients = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let attendedCount = 0;

while (clients.length > 0) {
    let currentClient = clients.shift();

    if (currentClient === "VIP") {
        console.log(`Atendiendo a cliente ${currentClient} con prioridad especial`);
    } else {
        console.log(`Atendiendo a cliente ${currentClient}`);
    }

    attendedCount++;
}

console.log(`Total de clientes atendidos: ${attendedCount}`);