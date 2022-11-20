// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBlLYVhjuwfF7JopEwnokD_15g3SY2lM",
  authDomain: "react-authentication-4954f.firebaseapp.com",
  projectId: "react-authentication-4954f",
  storageBucket: "react-authentication-4954f.appspot.com",
  messagingSenderId: "709811840459",
  appId: "1:709811840459:web:c79ceab5c860d65279c24e",
  measurementId: "G-NY9VC26927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;