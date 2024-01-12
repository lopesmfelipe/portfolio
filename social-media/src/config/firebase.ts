// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwjAHTmRbpzD10bmSvtifHmKyjcRRmCo",
  authDomain: "react-social-media-7ff63.firebaseapp.com",
  projectId: "react-social-media-7ff63",
  storageBucket: "react-social-media-7ff63.appspot.com",
  messagingSenderId: "1045328089677",
  appId: "1:1045328089677:web:5ab628ae668c1f658dc204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);