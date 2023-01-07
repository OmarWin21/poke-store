import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Cards from '../components/cards/cards.js';
import singIng from '../pages/singIng/singIng.js';
import Login from '../containers/Login.jsx'
import Landing from '../pages/landing/Landing.js';


function App() {

  return(

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path= '/login' component={Login}/>
          <Route  exact path = '/cards' component= {Cards}/>
          <Route exact path = '/SignIn' component = {singIng}/>
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App;
