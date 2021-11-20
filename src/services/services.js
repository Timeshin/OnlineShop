import { GET_CURRENCIES, GET_CATEGORIES, GET_PRODUCT, GET_CATEGORY } from '../query/query';
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

function getCategoryByInput(input) {
    return client.query(GET_CATEGORY, { input: {title: input} })
    .toPromise()
    .then(result => result.data)
}

export {
    getCategories,
    getCurrencies,
    getProduct,
    getCategoryByInput
}