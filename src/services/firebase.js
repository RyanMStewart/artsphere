import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_PROJECT_ID + ".firebaseapp.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID + ".appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Exporting the auth, firestore, and storage instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
