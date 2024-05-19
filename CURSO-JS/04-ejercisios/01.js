//FUNCION cualEsMayor con las propiedades a y b 
function cualEsMayor (a,b){
    //se hace una comparacion de a y b
    if (a > b){
    // si  a es mayor que b return a
        return a
    // // si no return b
    }else {
        return b
    }
}
/* se define una variable que sea igual a la funcion
 y se muestra en consola */
let mayor = cualEsMayor (10, 5);
console.log (mayor);

//MISMA SOLUCION PERO CON OPERADOR TERNARIO
function cualEsMayorDos (a,b){
    return a > b ? a : b
}


let mayorDos = cualEsMayorDos (10, 5);
console.log (mayor);