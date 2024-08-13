/**
 * crear algoritmo que devuelva numero
 * menor y mayor de un arry
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function get_menor_mayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
        }
    return [menor, mayor]
}
let numeros = get_menor_mayor(array)
console.log(numeros);