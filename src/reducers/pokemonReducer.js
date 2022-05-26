import { types } from "../types";

const initialState = {
    pokemons:[],
    error:null,
    loadingList: false,
    loading:false,
    pokemon:{},
    modal:false
}


export const pokemonReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_POKEMON:
            return{
                ...state,
                loadingList: action.payload,            
            } 
        case types.GET_POKEMON_ITEM:
            return{
                ...state,
                loading: action.payload,            
            } 
        case types.POKEMON_GET_SUCESS:
            return{
                ...state,
                loading: false,
                error:null,
                pokemon:{},
                pokemons:action.payload
            }
        case types.POKEMON_SEARCH_GET_SUCESS:
            return{
                ...state,
                loading: false,
                error:null,
                pokemons: null, 
                pokemon:action.payload           
            }
        case types.OPEN_MODAL_POKEMON:
            return{
                ...state,
                modal: action.payload,            
            }
        case types.CLOSE_MODAL_POKEMON:
            return{
                ...state,
                modal: action.payload,            
            }
        case types.POKEMON_ITEM_GET_SUCESS:
            return{
                ...state,
                pokemon: action.payload,            
            }   
        default:
            return state;
    }
}