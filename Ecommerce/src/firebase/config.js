// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL_gbQ11DksQ_pW1mh0KTVAOIrJ66nsYo",
    authDomain: "reactcoder-532a0.firebaseapp.com",
    projectId: "reactcoder-532a0",
    storageBucket: "reactcoder-532a0.firebasestorage.app",
    messagingSenderId: "1078361063045",
    appId: "1:1078361063045:web:ba60cf7785b6416253f3ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);