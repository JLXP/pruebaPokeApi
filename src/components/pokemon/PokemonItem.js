import React from 'react';
import {Col, Card, Button, Row } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {openModal} from '../../actions/pokemonActions';
import { getPokemonModalAction } from '../../actions/pokemonActions';

export const PokemonItem = ({pokemon}) => {

    const dispatch = useDispatch();
    

    const handleSubmit = (id) => {
        dispatch(openModal());
        dispatch(getPokemonModalAction(id));
        
        
    }
  
  return (
    <Col md={6} lg={3} >
        <Card className='mb-4 text-center' onClick={()=>handleSubmit(pokemon.id)} style={{cursor:'pointer',alignItems:'center',backgroundColor:'#B0E0E6'}}  >
            <Card.Img
                className='mt-2'
                style={{borderRadius:'100px',backgroundColor:'white', width:'100px', height:'100px',padding:'2px'}}
                variant='top'
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Imagen de ${pokemon.name}`}
                           
            ></Card.Img>
            <Card.Body>
                <Card.Title className='text-uppercase mb-0'>{pokemon.name}</Card.Title>
                <Row  className='mb-4'>
                    {pokemon.types.map((type,index)=>(
                    <Col className="text-center" key={index}>
                        <br/>
                        {type.type.name==='normal'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#DDCCAA'}}>{type.type.name}</span>):
                        type.type.name==='fighting'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#FF6A6A'}}>{type.type.name}</span>):
                        type.type.name==='flying'?(<span className="text-capitalize badge" style={{backgroundColor:'#BAAAFF'}}>{type.type.name}</span>):
                        type.type.name==='poison'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#CC88BB'}}>{type.type.name}</span>):
                        type.type.name==='ground'?(<span className="text-capitalize badge" style={{backgroundColor:'#DEB887'}}>{type.type.name}</span>):
                        type.type.name==='rock'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#CD853F'}}>{type.type.name}</span>):
                        type.type.name==='bug'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#99CC33'}}>{type.type.name}</span>):
                        type.type.name==='ghost'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#778899'}}>{type.type.name}</span>):
                        type.type.name==='steel'?(<span className="text-capitalize badge" style={{backgroundColor:'#CCCCCC'}}>{type.type.name}</span>):
                        type.type.name==='fire'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#FF7F00'}}>{type.type.name}</span>):
                        type.type.name==='water'?(<span className="text-capitalize badge" style={{backgroundColor:'#B0E2FF'}}>{type.type.name}</span>):
                        type.type.name==='grass'?(<span className="text-capitalize badge" style={{backgroundColor:'#99FF66'}}>{type.type.name}</span>):
                        type.type.name==='electric'?(<span className="text-capitalize badge" style={{backgroundColor:'#FFD700'}}>{type.type.name}</span>):
                        type.type.name==='psychic'?(<span className="text-capitalize badge" style={{backgroundColor:'#FFB5C5'}}>{type.type.name}</span>):
                        type.type.name==='ice'?(<span className="text-capitalize badge" style={{backgroundColor:'#ADD8E6'}}>{type.type.name}</span>):
                        type.type.name==='dragon'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#AB82FF'}}>{type.type.name}</span>):
                        type.type.name==='dark'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#A9A9A9'}}>{type.type.name}</span>):
                        type.type.name==='fairy'?(<span className="text-capitalize badge" style={{backgroundColor:'#FFB0FF'}}>{type.type.name}</span>):
                        type.type.name==='unknown'?(<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#FFF'}}>{type.type.name}</span>):
                        (<span className="text-capitalize badge" style={{color:'white',backgroundColor:'#424242'}}>{type.type.name}</span>)
                        }
                    </Col>
                    ))
                    }
          </Row>                
            </Card.Body>
        </Card>
    </Col>
  )
}
