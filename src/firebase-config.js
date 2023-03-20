import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API_KEY,

  authDomain: "earthonly-4d0ed.firebaseapp.com",

  projectId: "earthonly-4d0ed",

  storageBucket: "earthonly-4d0ed.appspot.com",

  messagingSenderId: "262924754667",

  appId: "1:262924754667:web:b77a0cf2a6ec999fffa8ae",

  measurementId: "G-SKM76NG112",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
