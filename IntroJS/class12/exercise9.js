/*
● Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos.
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana
y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc.
Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un día en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las
columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas
para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
día que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.
Día 1 Día 2 Día 3 Día 4 Día 5 Día 6 Día 7
Semana 1 1135 2500 900 1600 2800 3650 1100
Semana 2 1750 1890 1900 1300 898 1750  2800
Semana 3 1700 1150 1690 1900 1770 4500 2560
Semana 4 800 1250 1430 2100 1980 1270 950
*/
const prompt = require("prompt-sync")({ sigint: true });

let expenses = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

// TOTAL DE GASTOS EN UNA SEMANA
let week = parseInt(prompt("Ingrese la semana (1-4): ")) - 1;
let weekSum = 0;

for (let j = 0; j < expenses[week].length; j++) {
    weekSum += expenses[week][j];
}

console.log(`El total de gastos en la semana ${week + 1} es: ${weekSum}`);


// TOTAL DE GASTOS EN UN DÍA
let day = parseInt(prompt("Ingrese el día (1-7): ")) - 1;
let daySum = 0;

for (let i = 0; i < expenses.length; i++) {
    daySum += expenses[i][day];
}
console.log(`El total de gastos en el día ${day + 1} es: ${daySum}`);


// TOTAL DE GASTOS EN EL MES
let monthSum = 0;

for (let i = 0; i < expenses.length; i++) {
    for (let j = 0; j < expenses[i].length; j++) {
        monthSum += expenses[i][j];
    }
}

console.log(`El total de gastos en el mes es: ${monthSum}`);

/* Es lo mismo recorrer por filas o por columnas para obtener el total del mes, 
ya que se recorren todos los elementos de la matriz.
La única diferencia es el orden en que se recorren los elementos */


// SEMANA Y DÍA QUE MÁS GASTOS SE REALIZARON
let maxWeekSum = 0;
let maxWeek = 0;
for (let i = 0; i < expenses.length; i++) {
    let currentWeekSum = 0;
    for (let j = 0; j < expenses[i].length; j++) {
        currentWeekSum += expenses[i][j];
    }
    if (currentWeekSum > maxWeekSum) {
        maxWeekSum = currentWeekSum;
        maxWeek = i;
    }
}
console.log(`La semana que más gastos se realizaron fue la semana ${maxWeek + 1} con un total de ${maxWeekSum}`);

let maxDaySum = 0;
let maxDay = 0;

for (let j = 0; j < expenses[0].length; j++) {
    let currentDaySum = 0;
    for (let i = 0; i < expenses.length; i++) {
        currentDaySum += expenses[i][j];
    }
    if (currentDaySum > maxDaySum) {
        maxDaySum = currentDaySum;
        maxDay = j;
    }   
}
console.log(`El día que más gastos se realizaron fue el día ${maxDay + 1} con un total de ${maxDaySum}`);


