console.log('Aprendiendo sobre GIT');

let acction = process.argv[2];

switch(acction){
    case (undefined):
        console.log('No se estableció un parámetro para la ejeción del archivo');
        break;
    default:
        console.log('el usuario seleccionó:' + acction);
        break;
}


    