import React, { useEffect, useState } from 'react'

const ApiPoke = () => {

    const [pokeData, setPokeData] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch ("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
            const data = await response.json();
            setPokeData(data);
            console.log(data);
            
        }
        fetchData();
    },[])



  return (
    <div>
        <h1>ApiPoke</h1>
    </div>
  )
}

export default ApiPoke