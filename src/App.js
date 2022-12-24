import Cadastrar from './front/cadastrar/'
import Login from './front/login/';
import Home from './front/home'

import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Nav from './components/nav/nav';
import Feed from './components/feed/feed';
import FeedRight from './components/feedright/feedright';
import Profile from './components/profile/profile';

function App() {

  return (
    <>


      <BrowserRouter>
        <Switch>
          <Route exact path='/cadastro'>
            <Cadastrar />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/profile'>
            <Nav />
            <Feed />
            <FeedRight />
            <Profile />
          </Route>
          <Route exact path='/'>
            <Nav />
            <Feed />
            <FeedRight />
            <Home />
          </Route>
          <Route path="*">
            <h1>Rota inexistente</h1>
          </Route>

        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
