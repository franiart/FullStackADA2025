/*
Encuentra la película más corta y analiza los títulos largos
Supón que tienes una lista de películas con su duración en minutos:
const movies = [
 { title: 'El Señor de los Anillos', duration: 200 },
 { title: 'Inception', duration: 148 },
 { title: 'Matrix', duration: 136 },
 { title: 'Toy Story', duration: 81 },
 { title: 'Coco', duration: 105 }
];
Queremos:
o Encontrar la película más corta en duración.
o De las películas restantes, quedarnos con aquellas cuyo título tenga
más de 10 caracteres.
o Crear una lista de los títulos largos en minúsculas.
o Imprime en la consola:
o El título de la película más corta.
o La lista de títulos largos en minúsculas.
*/

const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

let shortestMovie = movies.reduce((shortest, movie) => {
    return (movie.duration < shortest.duration) ? movie : shortest;
}, movies[0]);

let remainingMovies = movies.filter(movie => movie.title !== shortestMovie.title);
let longTitleMovies = remainingMovies.filter(movie => movie.title.length > 10);
let longTitlesLowercase = longTitleMovies.map(movie => movie.title.toLowerCase());

console.log(`Película más corta: ${shortestMovie.title}`);
console.log(`Títulos largos en minúsculas: ${longTitlesLowercase}`);

