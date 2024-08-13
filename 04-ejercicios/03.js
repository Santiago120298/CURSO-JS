/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function get_by_idx (arr,idx){
    if (idx < 0 || arr.length <= idx){
        return 'elemento no existe';
    }
    return arr [idx];
}
let resultado = get_by_idx ([1,2], 1);
console.log (resultado);