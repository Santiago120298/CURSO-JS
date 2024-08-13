//UpperCamelCase
// {id:1, recuperarClave: function (){}}
function Usuario (){
    this.id = 1;
    this.recuperarClave = function (){ //metodos
        console.log ('recuperando clave...');
    }
}

let usuario =  new Usuario (); //new = crea un objeto literal y vincula el prototipo de la funcion con el objeto recien creado
console.log (usuario);