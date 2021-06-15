import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Basket from './Pages/Basket/Basket';
import './Style/reset.scss';
import './Style/common.scss';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shop/basket" component={Basket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
