// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzBKxy5xsf-lucMRIAsuAmko29_i6hf6c",
    authDomain: "genius-car-service-341bf.firebaseapp.com",
    projectId: "genius-car-service-341bf",
    storageBucket: "genius-car-service-341bf.appspot.com",
    messagingSenderId: "677092175595",
    appId: "1:677092175595:web:eb449567ad90b0555718ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth