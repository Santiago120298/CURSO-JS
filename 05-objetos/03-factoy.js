/*
let user = {
    id: 1,
    email: 'nico@holamundo.io',
    name: 'nicolas',
    activo: true,
    recuperarclave: function () {
        console.log ('recuperando clave....'); //funcion anonima
    }, 
};

let user1 = {
    id: 2,
    email: 'chanchito@holamundo.io',
    name: 'chanchito',
    activo: false,
    recuperarclave: function () {
        console.log ('recuperando clave....'); //funcion anonima
    }, 
};
*/

function crearUsuario (name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarclave: function () {
            console.log ('recuperando clave....'); //funcion anonima
        }, 
    };
}

let user1 = crearUsuario ('nicolas', 'nico@holamundo.io');
let user2 = crearUsuario ('felipe', 'felipe@holamundo.io');

console.log (user1,user2);
