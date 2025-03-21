import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa3k-y1dLUS-bEaNoT7goDwWVGe6YArmU",
  authDomain: "behavioral-biometric-219bb.firebaseapp.com",
  projectId: "behavioral-biometric-219bb",
  storageBucket: "behavioral-biometric-219bb.appspot.com",
  messagingSenderId: "1050160915234",
  appId: "1:1050160915234:web:06799d7210dd87d8ab7b7b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
