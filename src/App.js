import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { auth } from './firebase/firebase.utils';

import { HomePage } from './pages/homepage/homepage';
import { SignInPage } from "./pages/signin/signin-page";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect( () => {
    const unsuscribeFromAuth = auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsuscribeFromAuth();
      console.log('loged out');
    }
  });

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
