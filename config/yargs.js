const opt = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
};

//paquete yargs, permite extraer argumentos de una forma mas sencilla que process.argv
const argv = require('yargs')
.command('listar', 'Imprime la tabla de multiplicar en consola',opt)
.command('crear', 'Genera un archivo con la tabla de multiplicar', opt)
.help()
.argv;

module.exports = {
    argv
};