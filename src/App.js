import {Route} from 'react-router-dom';
import Cards from './components/cards/cards.js';
import Nav from './components/nav/nav.js';
import singIng from './components/singIng/singIng.js';
import Login from './components/login/login.js';
import Landing from './components/landing/Landing.js';



function App() {

  return(
    <>
    <Nav/>
    <Route exact path='/' component={Landing}/>
    <Route exact path= '/login' component={Login}/>
    <Route  exact path = '/cards' component= {Cards}/>
    <Route exact path = '/singIng' component = {singIng}/>
    </>
  )
}

export default App;
