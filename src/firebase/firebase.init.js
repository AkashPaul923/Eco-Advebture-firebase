// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MSm7KpLN15YE8Ig2WJQa-2z8s18xH04",
  authDomain: "eco-adventure-6656c.firebaseapp.com",
  projectId: "eco-adventure-6656c",
  storageBucket: "eco-adventure-6656c.firebasestorage.app",
  messagingSenderId: "489487886482",
  appId: "1:489487886482:web:0cfe13304ab045a81d9e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth