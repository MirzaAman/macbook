import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/database';

const firebaseConfig = {

    apiKey: "AIzaSyCrrB4fqC8pWcB4ZR44GE7Jk2XD6Q8JTVI",
  
    authDomain: "rolex-web-portal.firebaseapp.com",
  
    projectId: "rolex-web-portal",
  
    storageBucket: "rolex-web-portal.appspot.com",
  
    messagingSenderId: "63401280903",
  
    appId: "1:63401280903:web:0786974020e526124d3f22",
  
    measurementId: "G-3N8S8HD7Y8"
  
  };
  
  
  // Initialize Firebase
  
  if(!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
  
  }else{
  
    firebase.app()
  
  }
  

  export default firebase;
