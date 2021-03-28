const { Router } = require('express');
const router = Router();

const { getPokemons, getOnePokemon, getPokemonByName } = require('../controllers/pokemons.controller');

router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getOnePokemon);
router.get('/pokemons/search/:name', getPokemonByName);


module.exports = router;