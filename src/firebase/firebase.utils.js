import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
     apiKey: "AIzaSyAMoKalsNr6NSS2KVjJgH8lUpUuEcBTbz4",
     authDomain: "crwn-db-358d3.firebaseapp.com",
     projectId: "crwn-db-358d3",
     storageBucket: "crwn-db-358d3.appspot.com",
     messagingSenderId: "76992056307",
     appId: "1:76992056307:web:74d12da474f0f3fe88a086"
   };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
     prompt: 'select_account'
});
export const signInWithGoole = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
     if(!userAuth) return;

     const userRef = firestore.collection('users').doc(userAuth.uid);
     let snapShot = await userRef.get();

     if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
}