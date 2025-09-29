import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCa1v1XIVL6QeEb0mEJMe7FpbJJ_oWkBfs",
  authDomain: "bdhhtxhxh.firebaseapp.com",
  projectId: "bdhhtxhxh",
  storageBucket: "bdhhtxhxh.firebasestorage.app",
  messagingSenderId: "959457797048",
  appId: "1:959457797048:web:0dc8da1a72fd1d58e0254d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);