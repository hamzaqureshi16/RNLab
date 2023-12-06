// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp6dGY9EdViCnURIXUUg3WqRRYuzzRTps",
  authDomain: "rnlab-c8803.firebaseapp.com",
  projectId: "rnlab-c8803",
  storageBucket: "rnlab-c8803.appspot.com",
  messagingSenderId: "126282147461",
  appId: "1:126282147461:web:b580c99688fb64d321abec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};