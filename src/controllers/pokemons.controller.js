const { getConexion } = require('../db');

//obtenerProductos http://localhost:3000/pokemons
const getPokemons = (req, res) => {
    const pokemons = getConexion().get('pokemons').value();
    res.send(pokemons);
}

//getOnePokemon http://localhost:3000/pokemons/id
const getOnePokemon = (req, res) => {
    const idPokemon = parseInt(req.params.id);

    const pokemon = getConexion().get('pokemons').find({ id: idPokemon }).value();
    res.json(pokemon);
}

//getPokemonByName http://localhost:3000/pokemons/search/name
const getPokemonByName = (req, res) => {
    const namePokemon = req.params.name;
    const pokemon = getConexion().get('pokemons').filter(pokemon => pokemon.name.startsWith(namePokemon));
    res.json(pokemon);
}


module.exports = {
    getOnePokemon,
    getPokemons,
    getPokemonByName
}