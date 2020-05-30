import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shop/Shop';
import Header from './component/header/header';
import SignIn from './page/signin/signin';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props; 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
        });
      }
      else{
        setCurrentUser({userAuth});
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exat path="/shop" component={ShopPage} />
          <Route exact path = "/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDisptachToProps)(App);
