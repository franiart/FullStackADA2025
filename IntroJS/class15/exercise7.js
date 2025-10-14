/*
Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si
"Sushi" está en la lista y muestra un mensaje que confirme si está o no.
*/

let foods = ["Pizza", "Hamburguesa", "Tacos"];
let hasSushi = foods.includes("Sushi");

if (hasSushi) {
    console.log("La lista contiene Sushi");
} else {
    console.log("La lista no contiene Sushi");
}
