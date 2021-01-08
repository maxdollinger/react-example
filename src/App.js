/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import { HomePage } from './pages/homepage/homepage';
import { SignInPage } from "./pages/signin/signin-page";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubSnpSht;
    const unsubAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        unsubSnpSht = userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser(userAuth);
    });


    return () => {
      console.log('cleanup');
      unsubAuth();
      unsubSnpSht();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
