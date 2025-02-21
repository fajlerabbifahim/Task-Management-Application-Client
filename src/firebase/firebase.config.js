// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa0dszY0cHTSxAvA7MEKFlb90vqzJAzKs",
  authDomain: "task-manager-3b289.firebaseapp.com",
  projectId: "task-manager-3b289",
  storageBucket: "task-manager-3b289.firebasestorage.app",
  messagingSenderId: "528305290239",
  appId: "1:528305290239:web:e5df58ad7107df9bcb45ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
