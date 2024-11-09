import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFDXb6QB0Dq0sgqoYISG0UycPRGlEZ_Q",
  authDomain: "hackumass24.firebaseapp.com",
  projectId: "hackumass24",
  storageBucket: "hackumass24.firebasestorage.app",
  messagingSenderId: "182812831368",
  appId: "1:182812831368:web:f73d1e2ba3333311f3b93d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Firestore
//const db = getFirestore(app);

export { app, auth };
