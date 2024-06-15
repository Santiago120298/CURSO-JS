/*
NOMBRE: ANCHO X ALTO
8K 7680 X 4320
4K 3840 X 2160
WQHD 2560 X 1440
FHD 1920 X 1080
HD 1280 X 720 
*/
// funcion que se le agrega propiedades en la variable nombre
function nombreResolucion (ancho, alto){
    //se realiza la comparacion mdiante el operador logico AND
    if (ancho >= 7680 && alto >= 4320){
        return '8K';
    }else if (ancho >= 3840 && alto >= 2160){
        return '4k';
    }else if (ancho >= 2560 && alto >= 1440){
        return 'WQHD';
    }else if (ancho >= 1920 && alto >= 1080){
        return 'FHD';
    }else if (ancho >= 1280 && alto >= 720){
        return 'HD';
    }else{
        return false;
    }
}
let nombre = nombreResolucion (3160, 1500);
console.log(nombre);