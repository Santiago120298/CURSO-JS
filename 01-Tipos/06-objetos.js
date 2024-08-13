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
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad=13;
personaje['edad']=13;

delete personaje.anime;

console.log(personaje)

