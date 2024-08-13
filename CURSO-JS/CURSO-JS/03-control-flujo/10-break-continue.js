let i = 0;
while (i < 6){
    i++;
    if ( i === 2){
        continue; //salta la busqueda
    }
    if (i === 4){
        break;  // detiene la ejecucion del while hasta 4
    }
    console.log(i);
}