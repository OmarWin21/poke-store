import React from 'react'

export default function card() {
  return (
    <div>
    {
    poke.map(element =>
     (
     <div key = {element.idPoke}>
       <img src={element.pokeImg} alt='bu'/>
       <h3>{element.pokeName}</h3>
       <h3>HP: {element.pokeHp}</h3>
       <h3>Attack: {element.attkPoke}</h3>
       <h3>Defense: {element.defensePoke}</h3>
       <div>
         <h3>Type: </h3> 
         {element.typePoke.map(e => (<h3 key={e}>{e}</h3>))}
       </div>
       <h3>Price: {"$"+element.pokePrice}</h3>
     </div>
     ))
   }
 </div>
  )
}
