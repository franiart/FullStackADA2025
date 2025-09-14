/*
Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1. Dividir la oración en palabras individuales.
2. Clasificar las palabras en dos categorías:
▪ Cortas (menos de 5 letras)
▪ Largas (5 letras o más)
3. Mostrar ambas listas de palabras clasificadas.
4. La oración es: "JavaScript es un lenguaje poderoso y versátil".
*/

const setence = "JavaScript es un lenguaje poderoso y versátil";

const words = setence.split(" ");
console.log(words);

let longWords = [];
let shortWords = [];

for (let word of words) {
    if (word.length < 5) {
        shortWords.push(word);
    } else {
        longWords.push(word);
    }
}

console.log("Palabras cortas: " + shortWords.join(", "));
console.log("Palabras largas: " + longWords.join(", "));
