import { GET_CURRENCIES, GET_CATEGORIES } from '../query/products';
import client from '../client';


function getCategories() {
    return client.query(GET_CATEGORIES)
    .toPromise()
    .then(result => result.data)
}

function getCurrencies() {
    return client.query(GET_CURRENCIES)
    .toPromise()
    .then(result => result.data)
}

export {
    getCategories,
    getCurrencies
}