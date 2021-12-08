// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA92l99Qah_3clIMmvDxWrusIKVHYbmkY4",
  authDomain: "uber-next-clone-c0e59.firebaseapp.com",
  projectId: "uber-next-clone-c0e59",
  storageBucket: "uber-next-clone-c0e59.appspot.com",
  messagingSenderId: "103918573445",
  appId: "1:103918573445:web:e0b29bdb7538d61c1416ec",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
