
const argv = require('./config/yargs').argv;

const {crearArchivo, listar} = require('./Logica/Multiplicar');

let comando = argv._[0];

switch(comando)
{
    case 'listar':
    listar(argv.base, argv.limite)
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err));
    break;

    case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`${archivo}`))
    .catch(err => console.log(err));
    break;

    default:
    console.log('Comando no reconocido');
    
}

console.log('Base elegida:', argv.base);
console.log('Limite elegido:', argv.limite);

//console.log(process.argv[2].split('=')[1]);//Sirve para extraer argumentos digitados por el usuario


