import React, { useEffect, useState } from 'react'
import "./ApiPoke.css"

const ApiPoke = () => {

    const [pokeData, setPokeData] = useState([])
    /* useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch ("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
            const data = await response.json();
            setPokeData(data);
            console.log(data);
            
        }
        fetchData();
    },[]) */

    useEffect(() => {
        fetch ("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
            .then(response => response.json())
            .then(data => setPokeData(data))
            .catch(err => console.error(err))
    },[])



  return (
    <div className='fase'>
        <h1>ApiPoke</h1>
        <div className='card'>
            {pokeData.map((poke, i) =>(
                <div key={i}>
                    <img alt='image' src={poke.image}/>
                    <p>{poke.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ApiPoke