import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyDgfDFUmarPc_0fLkFxU1dWTmJpgpZT-Fo',
    authDomain: 'fir-reg-cb0d0.firebaseapp.com',
    projectId: 'fir-reg-cb0d0',
    storageBucket: 'fir-reg-cb0d0.appspot.com',
    messagingSenderId: '515111016572',
    appId: '1:515111016572:web:ffa0eed4ed5729692b91f9',
    measurementId: "G-307CYEWVHB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);