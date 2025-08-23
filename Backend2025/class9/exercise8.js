/*
Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)
*/


/*
Triángulo equilátero: Tiene sus tres lados de igual longitud.
Triángulo isósceles: Tiene dos lados de igual longitud.
Triángulo escaleno: Tiene sus tres lados de diferentes longitudes. 
*/

const prompt = require('prompt-sync')();

let side1 = parseFloat(prompt("Ingrese el primer lado del triángulo: "));
let side2 = parseFloat(prompt("Ingrese el segundo lado del triángulo: "));
let side3 = parseFloat(prompt("Ingrese el tercer lado del triángulo: "));

if (side1 === side2 && side1 === side3) {
    console.log (`Los lados ingresados triángulo; lado 1: ${side1}, lado 2: ${side2} y lado 3: ${side3}, coinciden con un triángulo equilátero`);
} else if (side1 === side2 && side1 !== side3){
    console.log (`Los lados ingresados triángulo; lado 1: ${side1}, lado 2: ${side2} y lado 3: ${side3}, coinciden con un triángulo isóceles`);
} else {
    console.log (`Los lados ingresados triángulo; lado 1: ${side1}, lado 2: ${side2} y lado 3: ${side3}, coinciden con un triángulo escaleno`);
}
