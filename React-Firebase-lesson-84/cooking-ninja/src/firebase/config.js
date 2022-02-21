import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDaw4rlrNts1LRNEFnYEl-UC1IjPdNlnik",
    authDomain: "cooking-ninja-site-fe551.firebaseapp.com",
    projectId: "cooking-ninja-site-fe551",
    storageBucket: "cooking-ninja-site-fe551.appspot.com",
    messagingSenderId: "428116361877",
    appId: "1:428116361877:web:0644ae42731be72aa8919c",
    measurementId: "G-EZB86Z3ZT7"
  };

  // init firebase 

  firebase.initializeApp(firebaseConfig)

  // init services 
  const projectFirestore = firebase.firestore()

  // export 

  export { projectFirestore }