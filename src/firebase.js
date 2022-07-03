// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_uHK-VT_ZQQynz37bdXq4seDru4lkEfE",
  authDomain: "clone-75f5a.firebaseapp.com",
  projectId: "clone-75f5a",
  storageBucket: "clone-75f5a.appspot.com",
  messagingSenderId: "484448320985",
  appId: "1:484448320985:web:16810c12846de31d75edc8",
  measurementId: "G-LJHTD81GEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);