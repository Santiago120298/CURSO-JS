let email = 'nico@holamundo.io';
let name = 'nicolas';
let direccion = {
    calle :'queen st',          //variables, pero todo hace parte de un ojbeto
    numero: 15,

}
//POO PROGRAMACION ORIENTADA A OBJETOS
//OOP OBJECT ORIENTED PROGRAMMING
let user = {
    email: 'nico@holamundo.io',
    name: 'nicolas',
    direccion: {
        calle:'queen st', //objetos dentro de un objeto
        numero: 15,
    },
    activo: true,
    recuperarclave: function () {
        console.log ('recuperando clave....'); //funcion anonima
    }, 
};