// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3WFVhbUEkPZpGhLpHW7QT7MM7_CX2I0",
  authDomain: "expense-tracker-133cf.firebaseapp.com",
  projectId: "expense-tracker-133cf",
  storageBucket: "expense-tracker-133cf.appspot.com",
  messagingSenderId: "386600133318",
  appId: "1:386600133318:web:56fecd78c6e03056256dc7",
  measurementId: "G-SKHDQ44877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();