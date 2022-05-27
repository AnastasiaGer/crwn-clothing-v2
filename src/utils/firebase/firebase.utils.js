// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3ShZRM7zWJlzDFzUSYDactTDeCrGDfLM",
  authDomain: "crwn-shop-e8dd4.firebaseapp.com",
  projectId: "crwn-shop-e8dd4",
  storageBucket: "crwn-shop-e8dd4.appspot.com",
  messagingSenderId: "746757933107",
  appId: "1:746757933107:web:917fe223dcda2c3b14bb46",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


