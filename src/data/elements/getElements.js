import elements from './elements.json';

export function getElementsAll(category = null) {
    return new Promise((resolve, reject) => {
        if (category) {
            const element = resolve(elements.filter(element => element.category === category))
            resolve(element);
            reject ('Error');
        }
        resolve(elements);
        reject('Error');
    });
};

export function getElementsById(id) {
    return new Promise ((resolve, reject) => {
        const element = elements.find(element => parseInt(element.id) === parseInt(id));
        resolve(element);
        reject('Error');
    });
}