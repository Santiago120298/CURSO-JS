let animales = ['chanchito feliz', 'dragon','perrito'];
//se crea una variable y se le incluye OF de la variable animales
for ( let animal of animales){ 
// se muestra en consola cada uno de las propiedades del array
    console.log (animal); 
}

let i = 0;
while (i < animales.length){ /*misma forma de hacerlo con while pero este 
autoincremente se basa en el indice */
    console.log(animales [i]);
    i++;
}