import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQBCaiNqaQs7IVBI4V_gVU3GNHelnphjU',
  authDomain: 'bc55-vlearning.firebaseapp.com',
  projectId: 'bc55-vlearning',
  storageBucket: 'bc55-vlearning.appspot.com',
  messagingSenderId: '747659704916',
  appId: '1:747659704916:web:a547d9a2c6726c1aa2cbc1',
  measurementId: 'G-9JR484Y50T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, firebaseConfig };
