// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5tRbrYBO7_h_I2hX1h80lFyhhUBGA8Yg",
  authDomain: "hydrovoltexer.firebaseapp.com",
  projectId: "hydrovoltexer",
  storageBucket: "hydrovoltexer.firebasestorage.app",
  messagingSenderId: "1045778941374",
  appId: "1:1045778941374:web:52bc6870367c28ae09a5ef",
  measurementId: "G-FSR7V1RE6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);