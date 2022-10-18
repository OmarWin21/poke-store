
import React from 'react'

export default function Cards() {
    
    
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
        .then(resp => resp.json())
        .then(data => console.log(data))

    return (
    <div>cards</div>
  )
}
