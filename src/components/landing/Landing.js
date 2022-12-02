import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './landing.css'

export default function Landing() {
  const [poke, setPoke]= useState('');

 async function  pokecarrucel(){
    let numberRandom = [];
    const setNumbers = new Set();
    while ( setNumbers.size <=5 ){
      const id = Math.floor(Math.random(1) * 100);
      setNumbers.add(id);
      }
    //console.log(setNumbers)

    numberRandom = Array.from(setNumbers);
    //console.log(numberRandom)
    let datosRender = []
    for (let i = 0; i < numberRandom.length; i++) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numberRandom[i]}/`)
    
      datosRender.push(response.data.sprites.other["official-artwork"].front_default)
       }
    console.log(datosRender);
    setPoke(datosRender)
  }
  useEffect(() =>{
    setTimeout(pokecarrucel, 10000)
  },[])
  

  return (
    <div>
        <div className='hero'>

            <h2>Bienvenidos</h2>
              {
              poke && poke.map(e =>
                <img className='pokeImg' src={e}/>)
              }
            <button type = 'button' onClick = { pokecarrucel }> Skip </button>
        </div>
    </div>
  )
}
