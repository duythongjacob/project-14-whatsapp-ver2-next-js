// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrw8mjMIwoWt9ijMBVzlkEZGtilirgus0",
    authDomain: "whatsapp-clone-ver2.firebaseapp.com",
    projectId: "whatsapp-clone-ver2",
    storageBucket: "whatsapp-clone-ver2.appspot.com",
    messagingSenderId: "907243419085",
    appId: "1:907243419085:web:d80bbe32889613120b0084"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {db, auth, provider}