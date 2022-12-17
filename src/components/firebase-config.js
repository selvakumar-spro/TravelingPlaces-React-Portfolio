import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyA_hqonsKHOtLrCjSqrvADS7EiBIi3W14I",
    authDomain: "react-traveling-app.firebaseapp.com",
    projectId: "react-traveling-app",
    storageBucket: "react-traveling-app.appspot.com",
    messagingSenderId: "193243592142",
    appId: "1:193243592142:web:744f013a9b42fcc797679f"
  };

  const app =initializeApp(firebaseConfig);

  export const firebaseAuth =getAuth(app);