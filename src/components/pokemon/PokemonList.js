import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonItem } from './PokemonItem';
import {Container,Row,Spinner} from 'react-bootstrap';


export const PokemonList = () => {

  const pokemons = useSelector(state => state.pokemon.pokemons);
  const pokemon = useSelector(state => state.pokemon.pokemon);
  const loadingList = useSelector((state)=> state.pokemon.loadingList);
  const loading = useSelector((state)=> state.pokemon.loadingList);

  return (
     <Container fluid className="centered" style={{padding:'10px'}}>
      <Row >
      {!loadingList && pokemons?pokemons.map(pokemon=>(
          <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}       
          />
          )):!loading && pokemon?(<PokemonItem
          key={pokemon.id}
          pokemon={pokemon}/>):<Spinner animation="border" style = { {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}  />
      }
      </Row>
    </Container>)
  
}
