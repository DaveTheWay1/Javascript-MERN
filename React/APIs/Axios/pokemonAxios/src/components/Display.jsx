import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(pokemon=>{setPokemon(pokemon.data.results)})
    }, []); 
    return(
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
};

export default Display;