import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyB6s3v9pfOCr_SdJ1_4mEKKpSK3Tu0p3ek",
  authDomain: "daily-tracker-20dfe.firebaseapp.com",
  projectId: "daily-tracker-20dfe",
  storageBucket: "daily-tracker-20dfe.appspot.com",
  messagingSenderId: "753304571819",
  appId: "1:753304571819:web:0b2776902f65e119000cee",
  measurementId: "G-3MM3VMP54V",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
