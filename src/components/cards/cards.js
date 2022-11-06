import axios from "axios";
import { useEffect, useState } from "react";

export default function cards() {

  const [poke , setPoke] = useState([])
  
  async function getPoke() {
    try {
      let arrPoke =[];
      for(let i = 1; i<=200; i++){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      // console.log(response.data.name);
      let objPokes = {
        
        pokeName:
          response.data.name[0].toUpperCase() +
          response.data.name.slice(1, response.data.name.length),
        pokeImg: response.data.sprites.other["official-artwork"].front_default,
        pokeHp: response.data.stats[0].base_stat,
        attkPoke: response.data.stats[1].base_stat,
        typePoke: response.data.types.map(e => e.type.name),
        idPoke: response.data.id,
        defensePoke: response.data.stats[2].base_stat,
        pokePrice: ((response.data.stats[0].base_stat*0.60)+(response.data.stats[1].base_stat*0.20)+(response.data.stats[2].base_stat*0.20)+ 200)
      };
      arrPoke.push(objPokes)
      console.log(setPoke)
    }

    
    
    console.log(arrPoke);
    setPoke (arrPoke)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{getPoke()}, []);
  
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

  );
}
