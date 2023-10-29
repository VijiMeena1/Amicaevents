
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiOvw0hYIzp3ziu00C7ErxC45hc2sBz4Q",
  authDomain: "event-crafthub.firebaseapp.com",
  projectId: "event-crafthub",
  storageBucket: "event-crafthub.appspot.com",
  messagingSenderId: "306536164067",
  appId: "1:306536164067:web:b06afe29d0642103a173d6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };