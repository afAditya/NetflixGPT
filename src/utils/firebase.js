// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8JS9kG1qi9AuT0BBNGXRSZ1F_2QrEhh0",
  authDomain: "netflixgpt-4f5b1.firebaseapp.com",
  projectId: "netflixgpt-4f5b1",
  storageBucket: "netflixgpt-4f5b1.appspot.com",
  messagingSenderId: "1035052237648",
  appId: "1:1035052237648:web:6837e33b626ed04b2a2255",
  measurementId: "G-X7LWLQX1DP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
