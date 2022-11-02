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
      arrPoke.push(response.data.sprites.other["official-artwork"].front_default)
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
      <div>
        {/* <img src={poke} alt='bu'/> */}
      </div>
    </div>

  );
}

export default App;
