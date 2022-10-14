import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDehRXbHsWZwsS3FGQASspbKSsyDyTcKXg',
    authDomain: 'nico-e-commerce.firebaseapp.com',
    projectId: 'nico-e-commerce',
    storageBucket: 'nico-e-commerce.appspot.com',
    messagingSenderId: '186852583229',
    appId: '1:186852583229:web:7e77f596423cf046c44754',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);