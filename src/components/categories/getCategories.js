import categories from './categories.json'

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        resolve (categories);
        reject ('Error');
    });
};

export default getCategories;