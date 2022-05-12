// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFB-bsDUL3wjdkvSwmwW2Esa_sAwu8xOo",
  authDomain: "positivity-squad.firebaseapp.com",
  projectId: "positivity-squad",
  storageBucket: "positivity-squad.appspot.com",
  messagingSenderId: "499079042202",
  appId: "1:499079042202:web:8cf84953019cd703413b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;