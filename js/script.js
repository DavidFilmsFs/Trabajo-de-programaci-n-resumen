/*const name= "David Alejandro";
//let edad= 18; 
//edad = 19;//Cambio de edad

const proyectoFavorito= " Lego";

console.log("Mi proyecto favorito es" + proyectoFavorito);

function saludar(nombre) { console.log("Hola +nombre");}


let edad = Number(prompt("Ingresa tu edad"));

if( edad >= 18)
{console.log("Eres mayor de edad");}

else {console.log("Eres menor de edad");}




for(let i= 0; i<=10;i+=2){
    console.log(i);
}*/

/*
let numbers=[1,2,"3",4,5];

let pokedex =[
{
    name:"Squirtle",
    type:"Agua",
    number:4,
    description: "Tortuga de agua que lanza chorros de agua por la boca",
},


{
    name:"Warturtle",
    type:"Agua",
    number:4,
    description: "Tortuga de agua que lanza chorros de agua por la boca",
},

];
let numbers=[1,2,3,4,5];
*/


let peliculas = [
    
   {
    name:"Batman 89",
    director:"Tim Burton",
    type: "Superheroes",
    year:1989,
    actors: "Michael Keaton y Jack Nicholson",
},

{
    name:"Truman show",
    director:"Peter Weir",
    type:"Comedia y Drama",
    year:1998,
    actors: "Jim Carrey y Laura Linney",
},

{
    name:"Avengers ",
    director:"Josh Weedon",
    type: "Superheroes",
    year:2012,
    actors: "Chris Evans y Robert Downey Jr.",
},

{
    name:"Spider-man Brand New Day",
    director:"Destin Daniel Cretton",
    type: "Superheroes",
    year:2026,
    actors: "Tom Holland y Sadie Sink",
},

{
    name:"The Amazing Spider-man",
    director:"Marcc Webb",
    type: "Superheroes",
    year:2012,
    actors: "Andrew Garfield y Emma Stone"
}
];

const nuevaPelicula = {
  name: "Iron Man",
  director: "Jon Favreau",
  year: 2008,
  type: "Superheroes",
  actors: "Robert Downey Jr. y Gwyneth Paltrow"
};

peliculas.push(nuevaPelicula);


console.log("1. Pelicula agregada:");
console.log(peliculas[peliculas.length - 1]);

// 2. Filtrar peliculas por tipo
const peliculasGenero = peliculas.filter(
    pelicula => pelicula.type === "Superheroes"
);

console.log("2. Peliculas de superheroes:");
console.log(peliculasGenero);

// 3. Obtener los titulos con map()
const titulos = peliculas.map(
    pelicula => pelicula.name
);

console.log("3. Titulos de las peliculas:");
console.log(titulos);

// 4. Buscar una pelicula por su titulo exacto
const peliculaEncontrada = peliculas.find(
    pelicula => pelicula.name === "Avengers"
);

console.log("4. Pelicula encontrada:");
console.log(peliculaEncontrada);





