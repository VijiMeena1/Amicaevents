
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnCZRKW8uNuUkaABJfTdAmksvvTPec1F0",
  authDomain: "taste-haven-d0082.firebaseapp.com",
  projectId: "taste-haven-d0082",
  storageBucket: "taste-haven-d0082.appspot.com",
  messagingSenderId: "891528291025",
  appId: "1:891528291025:web:c75c322f233d32e4975bf0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };