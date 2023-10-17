// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4X-uMi6MxXPFaSDZsIX4HhlW9eCg8a0",
  authDomain: "technology-4b453.firebaseapp.com",
  projectId: "technology-4b453",
  storageBucket: "technology-4b453.appspot.com",
  messagingSenderId: "901456666663",
  appId: "1:901456666663:web:ee58222210d7ff91bf2e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);