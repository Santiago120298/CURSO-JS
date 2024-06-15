//PARA AGREGAR CONTENIDO AL ARRAY SE HACER CON [] YSE PEUDE AGREGAR MAS CON UNA  ,  
/*
LOS ARRYS TIENE INDICES QUE CON ESOTS PODEMOS TRAERLOS A LA CONSOLA 
0 = CHANCHITO
1 = CABALLO
*/
let animales =['chanchito','caballo'];
console.log(animales);

/* PARA TRAER UNA PROPIEDAD DE UN ARRAY SE USA CON EL INDICE
EN ESTE CASO [0] QUE SERIA CHANCHITO
*/
console.log(animales[0]);

//AGREGAR PROPIEDADES AL ARRAY
/*SE TRE CON EL NOMBRE DE LA PROPIEDAD MAS [] EL NUMERO
DEL INDICE QUE TENDRA MAS EL VALOR DE ESA PROPIEDAD*/
animales[2]='dragon';
console.log (animales);
  //TENER CUIDADO EL INDICE QUE SE LE AGREGA PUESTO QUE PUEDEN QUEDAR ESPACIOS EN BLANCO
animales[10] ='pez';
console.log (animales); // 7 espacios en blanco
console.log (animales[7]); // el 7 esta vacio por lo cual es UNDEFINED

console.log(typeof animales);// RESULTADO OBJECT 

//MUESTR LA CANTIDAD DE ELEMENTOS QUE TIENE UN ARRAY NOMBREDELARRAY.LENGTH = 11
console.log(animales.length);

