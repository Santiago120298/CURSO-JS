// variable igual a 15
let edad = 15 ;

/* EL CODIGO SE EJECUTA DE ARRIBA HACIA ABAJO POR LO 
CUAL SIEMPRE EVALUARA LA PRIMERA CONDICION */
// condicion que hace cumplir si el usuario es 'mayor de edad'  en este caso IF
if (edad > 17){
    console.log ('usuario mayor de edad' );
// segunda condicion    
}else if (edad > 13){
    console.log ('usuario necesita estar acompañado de sus padres' );
// tercera condicion si no aplica ninguna de las anteriores 2 condiciones
} else{
    console.log ('usuario menor de edad' );
}