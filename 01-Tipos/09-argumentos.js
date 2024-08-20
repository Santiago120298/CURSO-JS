function suma(a, b){ // dentor dle parentesis se le peuden pasar parametros para despues usarlos en la funcion
    console.log(arguments);
    return a + b;
}

let resultado =suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);