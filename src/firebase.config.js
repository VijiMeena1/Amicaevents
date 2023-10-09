
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAM4PgQkyKEJICy0cst5hR8iKPesxDC2Ss",
  authDomain: "eventcrafthub.firebaseapp.com",
  projectId: "eventcrafthub",
  storageBucket: "eventcrafthub.appspot.com",
  messagingSenderId: "512105826929",
  appId: "1:512105826929:web:f1fb2f778289538cba69d0",
  measurementId: "G-EYFNR2D3NM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth };