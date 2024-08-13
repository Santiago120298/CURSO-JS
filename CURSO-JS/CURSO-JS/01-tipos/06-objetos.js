//EJEMPLO DE OBJETO

let nombre ='tanjiro';
let anime ='demon slayer';
let edad = 16;

// VER IMAGEN EN EL INDEX.HTML
let personaje ={           //PARA LLAVE-VALOR VER IMAGENES
    nombre:'tanjiro',    //PAR LLAVE = NOMBRE
    anime:'demon salyer',//VALOR = TANJIRO O VALOR
    edad: '16',
};

//TENER EN CUENTA JS NO MOSTRARA LAS PROPIEDADES EN EL ORDEN
console.log(personaje);


//PARA SOLO VER DE UN OBJETO LA PROPIEDAD
console.log(personaje.nombre);
//OTRA FORMA DE COMO ACCEDER A UNA PROPIEDAD DE UN OBJETO
//TRAERLA COMO STRING DENTRO DE ['']
console.log(personaje['anime']);

//CAMBIAR VALOR DE UNA PROPIEDAD DE UN OBJETO
personaje.edad = 13;
personaje['edad'] = 16;
console.log(personaje.edad);

//ELIMINAR PROPIEDAD DE UN OBJETO
delete personaje.anime;
console.log(personaje)