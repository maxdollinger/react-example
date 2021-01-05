import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from './pages/homepage/homepage';
import { SignInPage } from "./pages/signin/signin-page";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
