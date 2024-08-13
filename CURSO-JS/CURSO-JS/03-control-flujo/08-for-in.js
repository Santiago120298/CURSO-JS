let user  = {
    id: 1,
    name: 'chanchito feliz',
    age: 25,

};

for (let prop in user){             //para entrar a la propiedad de una arrelgo
    console.log(prop, user[prop]);
}