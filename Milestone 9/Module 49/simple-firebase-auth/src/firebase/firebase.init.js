import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfAqirE-bbL7ktZNdUNXotzt7Vn13uMpY",
  authDomain: "simple-firebase-auth-9fc94.firebaseapp.com",
  projectId: "simple-firebase-auth-9fc94",
  storageBucket: "simple-firebase-auth-9fc94.firebasestorage.app",
  messagingSenderId: "924590786698",
  appId: "1:924590786698:web:c7b6fec9226c38ecff8573"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);