/**
 * crear un array de longitud N, y que sus elementos sean 
 * numeros de 1 hasta 1
 */
let longitud = 7;
function creararray(n){
    if(n<=0){
        return  [];
    }
    let arr =[];
    for (let i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;

}
let resultado = creararray(longitud);
console.log(resultado);