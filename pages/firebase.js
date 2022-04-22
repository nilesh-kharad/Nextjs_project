import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCIEpJmxZFeCp7NU8BfWFvDsrMSa2-cTu8",
    authDomain: "myreact-c51ff.firebaseapp.com",
    projectId: "myreact-c51ff",
    storageBucket: "myreact-c51ff.appspot.com",
    messagingSenderId: "684373435205",
    appId: "1:684373435205:web:7a2c1d11f6a7e55cc0542c"
  };
export const app = initializeApp(firebaseConfig)
export const storage = getStorage()
