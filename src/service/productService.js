import {
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    writeBatch,
    addDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export const getFirebase = (itemCollection, category) => {
    return new Promise((resolve, reject) => {
        const collectionQuery =
            itemCollection && category
                ? query(collection(db, itemCollection), where('categories', '==', category))
                : collection(db, itemCollection);

        getDocs(collectionQuery)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(products);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};