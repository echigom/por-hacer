const fs = require('fs');

let listadoporhacer = [];

const guardardb = () => {

    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoporhacer);
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Archivo data.json creado`);
        });

    });

}

const cargardb = () => {
    try {
        listadoporhacer = require('../db/data.json');

    } catch (error) {
        listadoporhacer = [];
    }


}

const getlistado = () => {
    cargardb();
    return listadoporhacer;
}

const crear = (descripcion) => {
    cargardb();

    let porhacer = {
        descripcion,
        completado: false,
    };

    listadoporhacer.push(porhacer);

    return guardardb();

}

const actualizar = (descripcion, completado = true) => {
    cargardb();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardardb();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargardb();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoporhacer = listadoporhacer.filter(tarea => tarea.descripcion != listadoporhacer[index].descripcion);
    }

    guardardb();
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}