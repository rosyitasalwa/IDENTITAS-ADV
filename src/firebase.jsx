// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-p8a0_A1qopOUaOOpT3zZyjRkM9sIzE",
  authDomain: "adv-projek.firebaseapp.com",
  projectId: "adv-projek",
  storageBucket: "adv-projek.firebasestorage.app",
  messagingSenderId: "314852407011",
  appId: "1:314852407011:web:8ffaad06d97f19a13ff7d6",
  measurementId: "G-LF3B2HDHGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
// const analytics = getAnalytics(app);