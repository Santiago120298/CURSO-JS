//tipo de referencia

//personaje tv

let nombre ='tanjiro';
let anime ='demon slayer';
let edad=16;

let personaje={
    nombre:'tanjiro',
    anime:'demon slayer',  //par llave-valor
    edad:16,

}; //objeto literal

console.log(personaje);
console.log(personaje.nombre); // se usa el punto y el nombre de la propiedad para poder ver solo esa propiedad en consola
console.log(personaje['anime']); //otra forma de  acceder a una propiedad de un objeto

personaje.edad=13;  // como cambiar el valor de la propiedad
personaje['edad']=13; // // como cambiar el valor de la propiedad

delete personaje.anime; // como eliminar una porpiedad

console.log(personaje);

