// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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

const googleSignInBtn = document.querySelector('.google-sign-in');
const signOutBtn = document.querySelector('.sign-out');


const provider = new GoogleAuthProvider();

const auth = getAuth(app);

googleSignInBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    alert(`Hello ${user.displayName}!`);
  }).catch((error) => {
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
  });
});

signOutBtn.addEventListener('click', () => {
  signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("User has signed in!");
    signOutBtn.style.display = 'block';
  } else {
    alert("No user currently");
    signOutBtn.style.display = 'none';
  }
});
  