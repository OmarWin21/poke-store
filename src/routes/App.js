import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Cards from '../components/cards/cards.js';
import  SignIn from '../pages/SignIn/SignIn.jsx';
import Login from '../pages/Login/Login.jsx'
import Landing from '../pages/landing/Landing.js';


function App() {

  return(

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path= '/login' component={Login}/>
          <Route  exact path = '/cards' component= {Cards}/>
          <Route exact path = '/SignIn' component = {SignIn}/>
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App;
