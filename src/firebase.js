import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyv_Cqnp6FxePqFWK18viOOKGIuw0TsLg",
  authDomain: "twitter-clone-57d3d.firebaseapp.com",
  projectId: "twitter-clone-57d3d",
  storageBucket: "twitter-clone-57d3d.appspot.com",
  messagingSenderId: "276621688374",
  appId: "1:276621688374:web:46bd4f271051b385b06297",
  measurementId: "G-EW73YLFJLN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
