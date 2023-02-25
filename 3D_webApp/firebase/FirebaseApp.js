// Import the functions you need from the SDKs you need
import { initializeApp, GoogleAuthProvider } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCygGgsoaHxyDBCRC4JC_KHDyg6GF6kRIg",
  authDomain: "zspace-3d.firebaseapp.com",
  projectId: "zspace-3d",
  storageBucket: "zspace-3d.appspot.com",
  messagingSenderId: "583062869959",
  appId: "1:583062869959:web:b4f95a0b69a5f8c94e6be2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
