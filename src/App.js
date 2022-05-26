import React,{useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import {Navbar} from './components/ui/Navbar';
import {PokemonList} from './components/pokemon/PokemonList';
import { getPokemonAction } from './actions/pokemonActions';
import {ModalPokemon} from './components/pokemon/ModalPokemon';



export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {  
    const loadingPokemons = ()=> {
      dispatch(getPokemonAction());
    }
        
    loadingPokemons();
 
    }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path='/' element={<PokemonList/>}/>     
      </Routes>
      <ModalPokemon/>
    </BrowserRouter>
  )
}
