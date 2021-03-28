//inicializar el servidor
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
//routes
app.use(require('./routes/pokemons.routes'));

module.exports = app






