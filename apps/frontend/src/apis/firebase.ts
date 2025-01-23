import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBp4G9vn8CAQk3wMHB_MUlpaZhbgCccgl8",
  authDomain: "test-case-481db.firebaseapp.com",
  projectId: "test-case-481db",
  storageBucket: "test-case-481db.firebasestorage.app",
  messagingSenderId: "522655834933",
  appId: "1:522655834933:web:41be60a0e1a0297b77a27c",
  measurementId: "G-KQLGYD5CZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);