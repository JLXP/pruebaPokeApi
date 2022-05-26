import axios from 'axios';

//Configuracion basica de axios
const clientAxios = axios.create({
    baseURL:'https://pokeapi.co/api/v2'
});

export default clientAxios;