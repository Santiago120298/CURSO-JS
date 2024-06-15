//short-circuit

//falso
//false 
//0         //FALSY
//''
//undefined
//NaN


//DEPENDIENDO EL OPERADOR  ||  O  &&  EN ESTE CASO DEVOLVERA EL PRIMER ELEMENTO QUE EVALUA EN TRUE
//[] || {} = DEVUELVE []
//[]  && {} = DEVUELVE {}

//HAY PALTAFORMAS QUE TE DEJAN ENTRAR AL USUARIO COMO SE VE
let nombre = 'chanchito';
let username = nombre || 'anonimo'; //DEVOLVERA la variable NOMBRE
console.log(username);

function fn1 (){
    console.log('soy funcion 1')
    return true;
}

function fn2 (){
    console.log('soy funcion 2')
    return true;
}

let x = fn1() && fn2();


