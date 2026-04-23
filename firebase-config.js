// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, push, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaKPSq0gBKaFG7Pfe-bGOpgEkz2TLnBS8",
  authDomain: "quizinrebin.firebaseapp.com",
  databaseURL: "https://quizinrebin-default-rtdb.firebaseio.com",
  projectId: "quizinrebin",
  storageBucket: "quizinrebin.firebasestorage.app",
  messagingSenderId: "40466121073",
  appId: "1:40466121073:web:766379012a8846c9d836d0",
  measurementId: "G-1TT4ZDJYCM"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

export { db, ref, set, get, push, update, remove, onValue };