import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCI7mmdYk7Wkv1RcoDy7gnhCkuAIcC-8Ss",
  authDomain: "uaohub.firebaseapp.com",
  projectId: "uaohub",
  storageBucket: "uaohub.appspot.com",
  messagingSenderId: "287422487472",
  appId: "1:287422487472:web:9e9c1c14b217b2e5c31475",
  measurementId: "G-F28SFNBETW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.database();