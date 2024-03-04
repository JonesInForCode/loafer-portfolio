// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbDOEjx--5Wdsrlp7HnaSTV1rYo5TeAlo",
  authDomain: "loafer-portfolio.firebaseapp.com",
  projectId: "loafer-portfolio",
  storageBucket: "loafer-portfolio.appspot.com",
  messagingSenderId: "89801243994",
  appId: "1:89801243994:web:a440cd1130f213e5ed8763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

