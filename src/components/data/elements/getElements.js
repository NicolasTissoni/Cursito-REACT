import elements from '../../data/elements/elements.json';

export function getElementsAll(category = null) {
    return new Promise((resolve, reject) => {
        if (category) {
            resolve(elements.filter(element => element.category === category))
            resolve(elements);
            reject ('Error');
        }
    });
};

export function getElementsById(id) {
    return new Promise ((resolve, reject) => {
        const element = elements.find(element => parseInt(element.id) === parseInt(id));
        resolve(element);
        reject('Error');
    });
}