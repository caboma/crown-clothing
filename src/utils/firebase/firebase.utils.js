import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5XSG-SdOoJzOSth78w61Cx17tH2uFh9U",
  authDomain: "crwn-clothing-db-6c1f2.firebaseapp.com",
  projectId: "crwn-clothing-db-6c1f2",
  storageBucket: "crwn-clothing-db-6c1f2.appspot.com",
  messagingSenderId: "348393108274",
  appId: "1:348393108274:web:5cb1122312a5841ea29d2b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
}