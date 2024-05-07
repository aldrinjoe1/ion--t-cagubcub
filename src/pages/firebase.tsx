import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDmuWAv1Qm_IaUwE2Xtlq5snEM9yJoe5sg",
    authDomain: "it35-cagubcub1.firebaseapp.com",
    projectId: "it35-cagubcub1",
    storageBucket: "it35-cagubcub1.appspot.com",
    messagingSenderId: "1031301818845",
    appId: "1:1031301818845:web:a7a7c9a89f487255d72e34"
  };
  const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}