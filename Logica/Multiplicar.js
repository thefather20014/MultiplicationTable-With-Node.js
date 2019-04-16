const fs = require('fs');
const chalk = require('chalk');

let crearArchivo = ((base, limite) => {

    return new Promise((reject, resolve) => {

        if(!Number(base) || !Number(limite))
        {
            reject(chalk.red(`El valor introducido ${base} o ${limite} no es un numero`));
            return;
        }
        
        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base}  X  ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {

            if(err)
            {
                reject(chalk.red(err));
            } 
            else
            {
                resolve(chalk.green(`La tabla-del-${base}-al-${limite} ha sido creada`));
            }

        });

    });
});

let listar = (base, limite) => {

    return new Promise((reject, resolve) => {
    {
        if(!Number(base) || !Number(limite))
        {
            reject(chalk.red('La base o el limite no son numeros'));
            return;
        }
        
        let resultado = '';

        for(let i = 1; i <= limite; i++)
        {
            resultado += `${chalk.magenta(base)}  X  ${chalk.cyan(i)} = ${chalk.blue(base*i)}\n`;
        }

        resolve(chalk.yellow(resultado));

    }
})
};

module.exports = {

    crearArchivo,
    listar
};

