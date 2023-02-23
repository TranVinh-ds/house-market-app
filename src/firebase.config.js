import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABK7F0-9IPkiRh4sLLYFETBPWE_oQUj9g',
  authDomain: 'house-marketplace-app-f4c8e.firebaseapp.com',
  projectId: 'house-marketplace-app-f4c8e',
  storageBucket: 'house-marketplace-app-f4c8e.appspot.com',
  messagingSenderId: '460409125127',
  appId: '1:460409125127:web:f12838667560b07f756da2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig)
export const db = getFirestore();
