
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBicThCmWoGTUP0H4UVZdEDVnE5wifjsqQ",
    authDomain: "proj575.firebaseapp.com",
    databaseURL: "https://proj575-default-rtdb.firebaseio.com",
    projectId: "proj575",
    storageBucket: "proj575.appspot.com",
    messagingSenderId: "1060035516400",
    appId: "1:1060035516400:web:9395553a8a8b9ebc582f35",
    measurementId: "G-CNXZLBQ66Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
