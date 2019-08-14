const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = porhacer.getlistado();
        for (let tarea of listado) {
            console.log("=========LISTADO DE TAREA==========");
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("====================================");
        }
        break;
    case 'crear':
        porhacer.crear(argv.descripcion)
            .then(archivo => { console.log(`${archivo}`); })
            .catch(err => { console.log(`Ocurrio un error inesperado ${err}`); });
        break;
    case 'actualizar':
        porhacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        porhacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Este comando no es reconocido');
}