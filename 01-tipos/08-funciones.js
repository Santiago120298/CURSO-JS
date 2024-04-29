/* 
function = procedimientos o listado de instrucciones 
saludar = nombre de la funcion
() = para indicar que es una funcion
{} = dentor de ellos va la porcion de codigo a ejecutar
*/
function saludar (){
    console.log('hola mundo');

}
// hace el llamado en consola de la funcion
saludar ();

// ejemplo de una funcion y como se ejecuta
function suma (){
    return 2 + 2; //return nos permite reutilizar codigo que se encuentre dentro de las fdunciones
}

//FORMA DE LLAMAR A LA FUNCION 2
let resultado = suma ();
console.log(resultado);
//FORMA DE LLAMAR A LA FUNCION 3
console.log (suma());