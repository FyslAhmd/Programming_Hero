// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRjL_Tku7zZPT5qI10OjVnWJX0xJS_FaI",
  authDomain: "integration-auth-f2911.firebaseapp.com",
  projectId: "integration-auth-f2911",
  storageBucket: "integration-auth-f2911.firebasestorage.app",
  messagingSenderId: "246886684645",
  appId: "1:246886684645:web:2bfd91456c1ab2db49810c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;