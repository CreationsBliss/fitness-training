import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNsLnGCeTZbTILCcwOVSzYtJ0GBoQht0I",
  authDomain: "fitness-training-b7927.firebaseapp.com",
  projectId: "fitness-training-b7927",
  storageBucket: "fitness-training-b7927.appspot.com",
  messagingSenderId: "1022663701798",
  appId: "1:1022663701798:web:bdbae5ed179fbcb2a53de7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;