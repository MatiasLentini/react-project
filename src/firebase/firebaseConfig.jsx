import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmbuWA2Cuwqx4BLI1B4bE8RDdBb_Xy0qk",
  authDomain: "products-d49f3.firebaseapp.com",
  projectId: "products-d49f3",
  storageBucket: "products-d49f3.appspot.com",
  messagingSenderId: "551042291052",
  appId: "1:551042291052:web:785b262c10f3aa9d490f49",
  measurementId: "G-XFFHV2VCKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);