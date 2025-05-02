// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMIjBTtE5tDFtvWSYsdIRcca2hXhFe_Rg",
  authDomain: "email-pass-auth-da19c.firebaseapp.com",
  projectId: "email-pass-auth-da19c",
  storageBucket: "email-pass-auth-da19c.firebasestorage.app",
  messagingSenderId: "346436054358",
  appId: "1:346436054358:web:21b329efbccd9e74f6baf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
