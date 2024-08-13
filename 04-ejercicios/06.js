/**
 * crear algoritmo que devuelva cantidad
 * de numeros positivos en un array
 *  */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantos_positivos(arr){
    let cantidad = 0;
    for (elemento of arr ){
        if (elemento > 0){
            cantidad++;
        }

    }
    return cantidad;
}

let resultado = cuantos_positivos(array);
console.log(resultado);