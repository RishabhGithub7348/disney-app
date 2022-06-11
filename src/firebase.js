import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider,onAuthStateChanged,signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAkuXPp8rraHcPBQAHwlvMtw92mHqqOIaE",
  authDomain: "disney-clone-98f73.firebaseapp.com",
  projectId: "disney-clone-98f73",
  storageBucket: "disney-clone-98f73.appspot.com",
  messagingSenderId: "980665421128",
  appId: "1:980665421128:web:06d037ea1dd272e834f77d"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export {onAuthStateChanged , signOut};
const db = getFirestore(app);
export default db;



