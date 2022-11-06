import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/card.js";

export default function Cards() {

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
      poke.map(e =>
       <Card 
          name={e.pokeName}
          image={e.pokeImg}
          Hp={e.pokeHp}
          attack={e.attkPoke}
       />
        )
      }
    </div>

  );
}
