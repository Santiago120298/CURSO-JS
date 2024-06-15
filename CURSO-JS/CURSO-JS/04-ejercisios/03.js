/*
Indice validar  que no sea menor  a cero y que el elemento
exista en el array 
*/
//2 parametros arr = arreglo y idx = indice
function getbyIdx (arr, idx){
    //idx < 0 verifica si el indice es menos a 0
    if(idx < 0 || arr.length <= idx ){
        return 'Elemento no existe';
    }
    return arr [idx];    
}
let resultado = getbyIdx ([1, 2], 1);
console.log(resultado)