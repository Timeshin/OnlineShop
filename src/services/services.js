import { GET_CURRENCIES, GET_CATEGORIES, GET_PRODUCT } from '../query/query';
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

function getProduct(id) {
    return client.query(GET_PRODUCT, { id: id })
    .toPromise()
    .then(result => result.data)
}

export {
    getCategories,
    getCurrencies,
    getProduct
}