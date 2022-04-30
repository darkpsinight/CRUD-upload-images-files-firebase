import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtPUMZF1pfQCTtrBkuaglZaGTO9bZxNEg",
    authDomain: "crud-firebase-8892b.firebaseapp.com",
    projectId: "crud-firebase-8892b",
    storageBucket: "crud-firebase-8892b.appspot.com",
    messagingSenderId: "1012123760642",
    appId: "1:1012123760642:web:cb7dc8eaf0756874a0cf1b",
    measurementId: "G-PQCDFZXTYD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);