// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqHQubrOv-pE0KOUbeYnPZkljWTpeYWzg",
  authDomain: "my-fire-base-tut.firebaseapp.com",
  projectId: "my-fire-base-tut",
  storageBucket: "my-fire-base-tut.appspot.com",
  messagingSenderId: "1022026129161",
  appId: "1:1022026129161:web:ebc2b2a57d3a20463c7dd8",
  measurementId: "G-45H39GGFR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
