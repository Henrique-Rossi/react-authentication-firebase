import firebase from "firebase/app";
import 'firebase/firebase-auth'


const app=firebase.initializeApp({
    apiKey: "AIzaSyAwZoTAkPQ6WLuCtFVc1HURNQadHKiSkjk",
    authDomain: "react-crud-21a36.firebaseapp.com",
    projectId: "react-crud-21a36",
    storageBucket: "react-crud-21a36.appspot.com",
    messagingSenderId: "397477245903",
    appId: "1:397477245903:web:a11b80f43354f610ce98ba"
  
});
export const auth = app.auth() 
export default app

// apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId:  process.env.REACT_APP_FIREBASE_APP_ID