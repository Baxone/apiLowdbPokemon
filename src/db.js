//montar BBDD fisica a traves de lowdb
const lowdb = require('lowdb');
const File = require('lowdb/adapters/FileAsync');

let db;

async function setConexion() {
    const adaptador = new File('db.json');
    db = await lowdb(adaptador);
    db.defaults({ pokemons: [] }).write();
}

const getConexion = () => db;

module.exports = {
    setConexion,
    getConexion
}


