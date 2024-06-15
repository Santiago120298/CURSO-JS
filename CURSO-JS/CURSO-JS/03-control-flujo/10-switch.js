// se usa para saber haciandode quiero que se dirija mi codigo
let  accion = 'actualizar';

switch (accion){
    case 'listar':
        console.log('accion de listar');
        break; //aqui se direccion hasta listar
    case 'guardar':
        console.log('accion guardar');
    default: //se redirije si no hay un CASE al cual pueda redirijirse
        console.log('accion no reconocida')
}