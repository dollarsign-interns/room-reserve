import 'firebase/database';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAWvINUgJeX1KpqPCpBCXeYW0vfzMGsfZA',
  authDomain: 'room-reserve-17c64.firebaseapp.com',
  databaseURL: 'https://room-reserve-17c64.firebaseio.com',
  projectId: 'room-reserve-17c64',
  storageBucket: 'room-reserve-17c64.appspot.com',
  messagingSenderId: '285134016759',
  appId: '1:285134016759:web:25d7be801460c0dc2383f2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default db;

// export const googleAuthProvider = firebase.auth.GoogleAuthProvider();

// client ID 285134016759-7u0rb1dmj965qt3fgjr65ucne7k178bt.apps.googleusercontent.com

// client secret aI8TWEfhYE4o7tCq23d2oqjm
