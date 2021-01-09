import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage';
import SignInPage from "./pages/signin/signin-page";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';

function App({ setCurrentUser, currentUser }) {

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = dispach => ({
  setCurrentUser: user => dispach(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
