const app = require('./app.js');

const { setConexion } = require('./db.js');

setConexion();

app.listen(3000);
console.log('Servidor en puerto', 3000);
