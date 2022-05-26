import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";

//Esta función sirve para poder agregar varios Reducers
export const rootReducer = combineReducers({
    pokemon: pokemonReducer,    
})