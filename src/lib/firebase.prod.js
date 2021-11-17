import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB8h0gcfU0M9dCBmoidHNNIgBVdSuOKKiw',
  authDomain: 'favor-51743.firebaseapp.com',
  projectId: 'favor-51743',
  storageBucket: 'favor-51743.appspot.com',
  messagingSenderId: '344629616445',
  appId: '1:344629616445:web:6e1f7204e489bd6722ef54',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
