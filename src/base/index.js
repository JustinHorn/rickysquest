import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from 'config/firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default app;
