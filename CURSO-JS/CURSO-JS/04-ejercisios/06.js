/*
crear algoritmo que devuelva cantidad de numeros
positivos en un array 
*/

let array = [2, 5, 7, 15, -100, 55];

function cuantosPositivos(arr){
    //se crea una variable que comienze con un valor inicial de 0
    let cantidad = 0;
    /* Se itera con un FOR OF que se llame 'elemento' 
    sobre el array que se pasa como parámetro */
    for (elemento of arr){
        /*si el elemento es mayor que 0, se suma 1 a la cantidad*/
        if (elemento > 0){
            cantidad++;
        }
    }/* Retorna el valor de cantidad*/
    return cantidad;
}

let resultado =cuantosPositivos (array);
console.log(resultado);