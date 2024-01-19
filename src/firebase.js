import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyB6q8MG2JmFIZjFU8Suz_mvAkvp89UhIjM",
  authDomain: "chat-application-pvt.firebaseapp.com",
  projectId: "chat-application-pvt",
  storageBucket: "chat-application-pvt.appspot.com",
  messagingSenderId: "471682548904",
  appId: "1:471682548904:web:4554037b07e0bf1642ee9d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();