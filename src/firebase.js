import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq395dneVL9Iu2yxGb57hrTH-1XePpVzg",
  authDomain: "worldbuilder1-2.firebaseapp.com",
  projectId: "worldbuilder1-2",
  storageBucket: "worldbuilder1-2.appspot.com",
  messagingSenderId: "47459418993",
  appId: "1:47459418993:web:8f68cc617bc5df20642cd0",
  measurementId: "G-Q86CE71Y6N"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
