// AND, OR, NOT

//AND &&

let mayor = false;
let suscrito = true;
console.log(true && true ); 
console.log(true && false );
console.log('operador AND', mayor && suscrito );
/* indica que tiene que evaluar lo que esta a la derecha y a la
izquierda lo cual responde a un boolean que sera = true or false*/

//OR ││  ALT+124

console.log('operador OR', mayor|| suscrito );
/* Se comparan los valores y almenos alguna de las 2
variables tienen que ser TRUE, si las 2 con false sera = FALSE
pero si hay un valor que sea true o los 2 son true  son = true
*/


//NOT !
console.log('operador NOT', !mayor);
//invierte el valor defiido en este caso de FALSE a TRUE

let catalogofoInfantil = !mayor;
/* en este caso estamos indicando sie ste usuario no tiene permitido
entrar a otro catolog que no sea el infantil*/
console.log(catalogofoInfantil);
