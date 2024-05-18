let animales = ['chanchito feliz', 'dragon','perrito'];

for ( let animal of animales){ //se crea una variable y se le incluye OF de la variable animales
    console.log (animal); // se muestra en consola cada uno de las propiedades del array
}

let i = 0;
while (i < animales.length){ //misma forma de hacerlo con while pero este autoincremente se basa en el indice
    console.log(animales [i]);
    i++;
}