import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "uptime-tracker-pro-87848.firebaseapp.com",
  projectId: "uptime-tracker-pro-87848",
  storageBucket: "uptime-tracker-pro-87848.firebasestorage.app",
  messagingSenderId: "561958007714",
  appId: "1:561958007714:web:482990579535a87256f8fb",
  measurementId: "G-31VKBK1K9L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
