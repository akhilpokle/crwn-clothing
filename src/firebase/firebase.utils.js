import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAj8bCEg3-HWQWM6_DQpTS12AtPmMOvlfg",
    authDomain: "crwn-db-aef41.firebaseapp.com",
    databaseURL: "https://crwn-db-aef41.firebaseio.com",
    projectId: "crwn-db-aef41",
    storageBucket: "crwn-db-aef41.appspot.com",
    messagingSenderId: "551379750748",
    appId: "1:551379750748:web:a75c2b51b3f331d869bb99"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(userAuth){

        const userRef = firestore.doc(`user/${userAuth.uid}`);
        const snapshot = await userRef.get();

        if(!snapshot.exists){
            const {displayName,email} = userAuth;
            const createdAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log(error);
            }
        }

        return userRef; 
    }else{
        return;
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;