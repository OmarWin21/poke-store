import React from 'react'

export default function Card(props) {

  console.log(props);

  return (
    <div>
     <div>
       <img src={props.image} alt='bu'/>
       <h3>{props.id}</h3>
       <h3>{props.name}</h3>
       <h3>HP:{props.Hp}</h3>
       <h3>Attack: {props.attack}</h3>
       {/* <h3>Attack: {element.attkPoke}</h3>
       <h3>Defense: {element.defensePoke}</h3>
       <div>
         <h3>Type: </h3> 
         {element.typePoke.map(e => (<h3 key={e}>{e}</h3>))}
       </div>
       <h3>Price: {"$"+element.pokePrice}</h3> */}
     </div>
 </div>
  )
}
