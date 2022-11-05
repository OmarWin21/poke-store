// import Cards from "./components/cards/cards.js";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [poke , setPoke] = useState([])
  
  async function getPoke() {
    try {
      let arrPoke =[];
      for(let i = 1; i<=20; i++){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      // console.log(response.data.name);
      let objPokes = {
        pokeName : response.data.name,
        pokeImg: response.data.sprites.other["official-artwork"].front_default,
        pokeHp: response.data.stats[0].base_stat
        
      }

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
        <div>
          <img src={element.pokeImg} alt='bu'/>
          <h3>{element.pokeName}</h3>
          <h3>HP: {element.pokeHp}</h3>
        </div>
        ))
      }
    </div>

  );
}

export default App;
