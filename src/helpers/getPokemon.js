import clientAxios from '../config/axios';

export const getPokemons = async(limit = 151) => 
    clientAxios(`/pokemon?limit=${limit}`).then((response) => response.data);

    
export const getPokemonsWithDetails = async(pokemons) => {
    return Promise.all(pokemons.map((pokemon) => clientAxios(pokemon.url))).then(
        (pokemonResponses) => {
          return pokemonResponses.map((response) => response.data);
        })
};

export const getPokemonSearch = async(pokemon) => 
    clientAxios(`/pokemon/${pokemon}`).then((response) => response.data);

export const getPokemonModal = async(pokemonId) => 
  clientAxios(`/pokemon/${pokemonId}`).then((response) => response.data);