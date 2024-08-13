/**
 * crear algoritmo que devuelva
 * el precio del producto
 * mas impuesto
 */

function precio_completo (precio, impuesto){
        return precio + precio * impuesto;
}

let resultado = precio_completo(19.90, 0.15);
console.log(resultado);