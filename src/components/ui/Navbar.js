import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {getPokemonSearchAction,getPokemonAction} from '../../actions/pokemonActions';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';

export const Navbar = () => {

  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    name:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(search).includes('')){
      Swal.fire({
        icon:'error',
        title: 'There was an error',
        text:'There was an error, try again'
      })
    }else{
      let lowercasetext = search.name.toLowerCase();  
      dispatch(getPokemonSearchAction(lowercasetext));
    }
    
 }

 const handleButton = () => {
  dispatch(getPokemonAction());
}

  return (
    <nav className="navbar navbar-dark bg-dark">
        <Button  className="navbar-brand" type="submit" onClick={handleButton}>PokemonApi</Button>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="form-inline">
        <Form.Control
        className="form-control mr-sm-2"
                  id='name'
                  type="text"
                  placeholder="Pokemon Name"
                  name="name"
                  onChange={e => setSearch({
                    ...search,
                    [e.target.name]: e.target.value
                  })}
                  
        />
        <Button
          variant='light'
          className='btn btn-outline-info my-2 my-sm-0'
          type="submit"
          >
            Search Pokemons
        </Button>
        </Form.Group>  
        </Form>   
    </nav>
  )
}
