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
                ? query(collection(db, itemCollection), where('category', '==', category))
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

export const getProductById = (itemCollection, id) => {
    return new getDoc(doc(db, itemCollection, id))
        .then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() };
            return product;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProductStock = (purchase) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    purchase.items.forEach((item) => {
        getDoc(doc(db, 'Products', item.element.id))
            .then((docSnapshot) => {
                if (docSnapshot.data().stock >= item.count) {
                    batch.update(doc(db, 'Products', item.element.id), {
                        stock: docSnapshot.data().stock - item.count,
                    });
                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return { batch, outOfStock };
};

export const outOfStockProduct = (purchase, batch, outOfStock) => {
    if (outOfStock.length === 0) {
        return new addDoc(collection(db, 'purchases'), purchase)
            .then(({ id }) => {
                batch.commit();
                return id;
            })
            .catch((error) => {
                return error;
            });
    }
};