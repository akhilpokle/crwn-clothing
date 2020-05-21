import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shop/Shop';
import Header from './component/header/header';
import SignIn from './page/signin/signin';
import {auth} from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exat path="/shop" component={ShopPage} />
          <Route exact path = "/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
