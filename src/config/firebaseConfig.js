import firebase from 'firebase/app';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBv53rG01uXbftV4Y4aBfQP4yJqzmpna_g",
    authDomain: "vvisitimages.firebaseapp.com",
    projectId: "vvisitimages",
    storageBucket: "vvisitimages.appspot.com",
    messagingSenderId: "71137623876",
    appId: "1:71137623876:web:c2a4bb1cee3b7a7b2ea111",
    measurementId: "G-0EELK1S69J"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }