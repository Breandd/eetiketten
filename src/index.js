import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import Router from "./pages";

import "../src/assets/styles/index.scss"

firebase.initializeApp({
    apiKey: "AIzaSyDJtYDNa3AHGYCv8AZtGywPMIR-AECSyRo",
    authDomain: "eet-iketten.firebaseapp.com",
    databaseURL: "https://eet-iketten.firebaseio.com",
    projectId: "eet-iketten",
    storageBucket: "eet-iketten.appspot.com",
    messagingSenderId: "849022267672",
    appId: "1:849022267672:web:2a88517e907971da65ae6d"
})

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
