import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "loafer-portfolio.firebaseapp.com",
  projectId: "loafer-portfolio",
  storageBucket: "loafer-portfolio.appspot.com",
  messagingSenderId: "89801243994",
  appId: "1:89801243994:web:a440cd1130f213e5ed8763",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
