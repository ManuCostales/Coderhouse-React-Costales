
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmm5qT8FZ7kJTXoZ_RA6k0r_W47Mjz1_E",
  authDomain: "coderhouse-react-2.firebaseapp.com",
  projectId: "coderhouse-react-2",
  storageBucket: "coderhouse-react-2.firebasestorage.app",
  messagingSenderId: "756100255936",
  appId: "1:756100255936:web:c96c51c846f21a21ab1d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);