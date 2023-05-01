// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlsgbeZot97iFK1nxpTMoGwifuA7nxhJ8",
  authDomain: "lexxofirebase.firebaseapp.com",
  projectId: "lexxofirebase",
  storageBucket: "lexxofirebase.appspot.com",
  messagingSenderId: "317609087696",
  appId: "1:317609087696:web:211e5fd2a949e4988904d5",
  measurementId: "G-6QQLK0V0D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)