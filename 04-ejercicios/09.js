/**
 * crear algoritmo que tome una array de objetos
 * y devuelva un array de pares
 */

let pairs = [
    [1,{ name:'nicolas'}],
    [2,{ name:'felipe'}],
    [3,{ name:'chanchito'}],
];


let array = [{
    id: 1,
    name: 'nicolas',
},{
    id: 2,
    name: 'felipe',
},{
    id: 3,
    name: 'chanchito',
}];

function tocollection (arr){
    let collection = [];
    for (idx in arr){
        let elemento = arr [idx];
        collection [idx] = elemento [1];
        collection [idx].id =elemento [0];
    }
    return collection;
}

let resultado = tocollection (pairs);
console.log (resultado);


