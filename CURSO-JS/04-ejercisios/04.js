/* 
crear algoritmo  que imprima numeros impares
*/

//define variabl = i que es = 0
let i = 0;
//define un while para iterar de 0 hasta 10
while ( i <= 10){
/*se crea una condicion y se saca el modulo de 2 y 
si no es exactamente = a 0 me describa que el numero
es impar y lo muestre en consola */
    if (i % 2 !== 0){
        console.log('numero impar ', i);
    }
//incremento de 1 en 1
    i++
}
console.log ('fuera del while');