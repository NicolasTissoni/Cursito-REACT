import elements from './elements.json';

export function getElementsAll() {
    return new Promise((resolve, reject) => {
        resolve(elements);
        reject ('Error');
    });
};

export function getElementsById(id) {
    return new Promise ((resolve, reject) => {
        const element = elements.find(element => parseInt(element.id) === parseInt(id));
        resolve(element);
        reject('Error');
    });
}