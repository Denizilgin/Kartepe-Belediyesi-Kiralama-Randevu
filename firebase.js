import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, query , where, updateDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDenol5uVp5yDBBnUCNTonO9cQUU-trWF8",
    authDomain: "kartepebelediye.firebaseapp.com",
    projectId: "kartepebelediye",
    storageBucket: "kartepebelediye.appspot.com",
    messagingSenderId: "993270259189",
    appId: "1:993270259189:web:9f2c893c694f1d768b14bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);