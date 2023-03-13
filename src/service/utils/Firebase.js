import firebase from 'firebase/app';
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyCx55b_1BBaDmlw9Lip3y346hPN9plr8vY",
    authDomain: "courzerve-dev.firebaseapp.com",
    databaseURL: "https://courzerve-dev.firebaseio.com",
    projectId: "courzerve-dev",
    storageBucket: "courzerve-dev.appspot.com",
    messagingSenderId: "194572333148",
    appId: "1:194572333148:web:cd08a47b3425efaa727699",
    measurementId: "G-JC2NZN8PS5"
};
 

firebase.initializeApp(config);

export default firebase;