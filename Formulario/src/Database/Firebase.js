import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbODSgQyuXDgUfE5uqQVeYymUjsV_-ecg",
    authDomain: "orden-de-servicio-56a7e.firebaseapp.com",
    projectId: "orden-de-servicio-56a7e",
    storageBucket: "orden-de-servicio-56a7e.appspot.com",
    messagingSenderId: "185839315336",
    appId: "1:185839315336:web:f1dc6b4a58f3366049b23d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();