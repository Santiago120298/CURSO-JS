    //dentro de los () podemos pasarle PARAMETROS para usarlos en la funcion
function suma (a, b){ // a y b es llamado como parametro
    console.log(arguments); // forma de ver todos los argumentos definidos en esta funcion manera NO recomendada de hacerlo
    return a + b; //return nos permite reutilizar codigo que se encuentre dentro de las fdunciones
}


let resultado = suma (5, 6, 1, 2, 3); //5  y 6 es llamado como ARGUMENTO
// se define una variable RESULTADO  +  a la funcion suma se le agrega el valor al PARAMETRO 'a' que es '5'
console.log(resultado);
console.log(typeof suma); // indica que suma es una funcion