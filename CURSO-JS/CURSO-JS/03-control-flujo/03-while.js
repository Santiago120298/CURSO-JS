// cuales son los numeros pares

let i = 0; // primer valor de 'i'
while (i < 10){ //i es menor que 10 por lo cual ejecutara el codigo dentro de WHILE
    if(i % 2 == 0){ //aqui se una el  %  para que el resto sea = 0 
        console.log ('numero par', i); // muestra en  consolola el bucle
    }
    i++; // esta condicion tiene que ir simepre fuera del LOOP o se entra en un bucle infinito
}
console.log('fuera del while');