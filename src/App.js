import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shop/Shop';
import Header from './component/header/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
