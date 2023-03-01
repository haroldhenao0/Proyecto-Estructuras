import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCI7mmdYk7Wkv1RcoDy7gnhCkuAIcC-8Ss",
  authDomain: "uaohub.firebaseapp.com",
  projectId: "uaohub",
  storageBucket: "uaohub.appspot.com",
  messagingSenderId: "287422487472",
  appId: "1:287422487472:web:9e9c1c14b217b2e5c31475",
  measurementId: "G-F28SFNBETW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);