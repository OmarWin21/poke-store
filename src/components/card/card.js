import React from 'react'
import './card.css'
import { BiCart } from "react-icons/bi";
export default function Card(props) {

  console.log(props);

  return (
    <div className='main-container'>
     <div className='cards-container'>

      <div className='poke-card'>
        <img src={props.image} alt='bu'/>
        <div className='poke-info'>
          <div>
            <p>{props.name}</p>
            <p>HP:{props.Hp}</p>
            <p>Attack: {props.attack}</p>
          </div>
        <figure>
          <BiCart className='cartIcon'/>
        </figure>
        </div>
      </div>
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
