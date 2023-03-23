// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb9gSU7zPopjwakTQqYPYt8zM54tNInN4",
    authDomain: "it354-coffee-project.firebaseapp.com",
    projectId: "it354-coffee-project",
    storageBucket: "it354-coffee-project.appspot.com",
    messagingSenderId: "1085019544938",
    appId: "1:1085019544938:web:01b0b6fd1fc172a3315913",
    measurementId: "G-JZPY1MRPGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)