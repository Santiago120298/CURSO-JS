const user = {id: 1};
//se puede agregar propiedades a objetos y 
//arrays pero no modificar la variable de conts
user.name ='nicolas';
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar ();

delete user.name;
delete user.guardar;

console.log (user);

// con esta propiedad no puedo cambiar o asignar propiedades a la variable
const user1 = Object.freeze({id:1});
// con esta propiedad puedo cambiar el valor del objeto pero no asignarle o borrarle atributos
//const user1 = Object.seal({id:1});
user1.id = 2; 
user.name = 'nico';
console.log(user1);
