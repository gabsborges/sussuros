// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhO1MBY_QuzByEu8kLQb5RGer8UpX40AA",
    authDomain: "sussuros-do-baralho.firebaseapp.com",
    projectId: "sussuros-do-baralho",
    storageBucket: "sussuros-do-baralho.appspot.com",
    messagingSenderId: "760980742348",
    appId: "1:760980742348:web:8bbd3ef09c772853fd6269"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db,auth }