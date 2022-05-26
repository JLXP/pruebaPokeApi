import {types} from '../types/index';
import {getPokemons, getPokemonsWithDetails,getPokemonSearch,getPokemonModal} from '../helpers/getPokemon';
import Swal from 'sweetalert2';

export const getPokemonAction = () => {
    return async (dispatch) => {    
        dispatch(getPokemonList(true));
        try{
            const response = await getPokemons();
            const pokemonWithDetails = await getPokemonsWithDetails(response.results);
            dispatch(getPokemonSucess(pokemonWithDetails));
            dispatch(getPokemonList(false));
        }catch(error){
            

            Swal.fire({
                icon:'error',
                title: 'There was an error',
                text:'There was an error, try again'
            })
        }
    }
}




export const getPokemonSearchAction = (pokemon) => {
    return async (dispatch) => {
        try{
            const response = await getPokemonSearch(pokemon);
            dispatch(getPokemonSearchSucess(response));                       
        }catch(error){
            Swal.fire({
                icon:'error',
                title: 'There was an error',
                text:'Pokemon not found, try again'
            });
        }
    }
}

export const getPokemonModalAction = (pokemonId) => {
    return async (dispatch) => {
        dispatch(getPokemon(true));
        try{
            const response = await getPokemonModal(pokemonId);
            dispatch(getPokemonItemSucess(response));
            dispatch(getPokemon(false));
        }catch(error){
            Swal.fire({
                icon:'error',
                title: 'There was an error',
                text:'There was an error, try again'
            });
        }
    }
}


export const openModal = () =>({
    type: types.OPEN_MODAL_POKEMON,
    payload:true
})

export const closeModal = () =>({
    type: types.CLOSE_MODAL_POKEMON,
    payload:false
})

const getPokemon = (payload) =>({
    type: types.GET_POKEMON_ITEM,
    payload
})

const getPokemonList = (payload) =>({
    type: types.GET_POKEMON,
    payload
})

const getPokemonSucess = (payload) =>({
    type: types.POKEMON_GET_SUCESS,
    payload
})

const getPokemonSearchSucess = (payload) =>({
    type: types.POKEMON_SEARCH_GET_SUCESS,
    payload
})

const getPokemonItemSucess = (payload) =>({
    type: types.POKEMON_ITEM_GET_SUCESS,
    payload
})

