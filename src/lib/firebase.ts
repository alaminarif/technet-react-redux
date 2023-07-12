// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBzvlH0FpAa-SRS0yBxR8oIyEWvy80Oklc',
//   authDomain: 'technet-redux-ece9c.firebaseapp.com',
//   projectId: 'technet-redux-ece9c',
//   storageBucket: 'technet-redux-ece9c.appspot.com',
//   messagingSenderId: '668311502490',
//   appId: '1:668311502490:web:8181a201a8973aac806923',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
