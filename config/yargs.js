const crear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('actualizar', 'Actualiza las notas de trabajo', actualizar)
    .command('crear', 'Crea notas de trabajo', crear)
    .command('borrar', 'Borra notas de trabajo', crear)
    .help()
    .argv;

module.exports = {
    argv
}