import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Col, Modal, Image, Row, ProgressBar} from 'react-bootstrap';
import { closeModal } from '../../actions/pokemonActions';

export const ModalPokemon = () => {

    const dispatch = useDispatch();
    const modal = useSelector((state)=>state.pokemon.modal);
    const pokemon = useSelector((state)=>state.pokemon.pokemon);
    const loading = useSelector((state)=>state.pokemon.loading);  

    const handleModalClick = () => {
        dispatch(closeModal());
    }

  return (
    !loading && modal ?(<Modal show={modal} onHide={handleModalClick}  >
      <div  style={{backgroundColor:'red',display:'flex', alignItems: 'center'}}>
        <Image
          className="pt-2"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Imagen pokemon ${pokemon.name}`}
          height={300}
          width={300}
          style={{minWidth:'100px',minHeight:'100px'}}
        /> 
        <div className="text-center">     
        <Modal.Header  >
          <Modal.Title className="text-capitalize badge badge-dark" style={{fontSize:'20px'}}>{pokemon.name} <span className='badge badge-secondary'>{pokemon.stats[0].base_stat} Hp</span> </Modal.Title>     
        </Modal.Header>
        <span className="text-capitalize badge badge-info mt-3" style={{fontSize:'18px'}}>{pokemon.base_experience}/{pokemon.base_experience} EXP</span>
        </div> 
      
        
        
        </div>
        <Modal.Body>
        <h3 >Stats</h3>
          <Row xs={2} className='mb-4'>
            {pokemon.stats.slice(1,5).map((stat,index)=>(
              <Col className="text-center" key={index}>
                <span style={{fontWeight:'bold'}}>{stat.base_stat}k</span>
                <br/>
                {stat.stat.name==='attack'?(<span className="text-capitalize badge badge-danger" style={{fontSize:'14px'}}>{stat.stat.name}</span>):
                 stat.stat.name==='defense'?(<span className="text-capitalize badge badge-warning" style={{fontSize:'14px', color:'white'}}>{stat.stat.name}</span>):
                 stat.stat.name==='special-attack'?(<span className="text-capitalize badge badge-info" style={{fontSize:'14px'}} >{stat.stat.name}</span>):
                 (<span className="text-capitalize badge badge-success" style={{fontSize:'14px'}}>{stat.stat.name}</span>)
                }
              </Col>
              ))
            }
          </Row>
          <h3>Abilities</h3>
          <Row xs={2}>
            {pokemon.abilities.map((ability,index)=>(
              <Col className="text-center mb-2" key={index} >
                <span  className="badge badge-primary text-capitalize" style={{fontSize:'14px'}}>{ability.ability.name}</span>
              </Col>
              ))
            }
          </Row>
        </Modal.Body>
    </Modal>
    ):null
  )
}
