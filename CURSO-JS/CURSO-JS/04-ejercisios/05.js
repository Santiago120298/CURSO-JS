/* crear algoritmo que devuelva numero
menor y mayor de un array  */

            //elemetos del array
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor (arr){
    // se le indica a ambas variables el elemenos del array con indice 0
    let menor = arr [0];
    let mayor = arr [0];
    //se itera un for of de arr
    for (numero of arr){
    /*se indica que menor es = a menor si menor es < a numero osea al array 
    de ser asi retorna el valor de menor y si no retornara numero osea el numero del array 
    al cual remplazara
    y misma situacion con la variable mayor*/
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log (numeros);