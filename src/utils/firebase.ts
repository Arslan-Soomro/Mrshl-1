// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNr67qSX-RmzhGpD7tTj_TVS_LlzQeX7s",
  authDomain: "mrshl-01.firebaseapp.com",
  databaseURL: "https://mrshl-01-default-rtdb.firebaseio.com",
  projectId: "mrshl-01",
  storageBucket: "mrshl-01.appspot.com",
  messagingSenderId: "166646608519",
  appId: "1:166646608519:web:c5516795e63a17cafc7e22"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);

export default fbApp;