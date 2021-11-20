import { gql } from '@urql/core';

const GET_CATEGORIES = gql`
    query Categories {
        categories {
            name
            products {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items{
                displayValue
                value
                id
                }
            },
            prices {
                currency
                amount
            }
            brand
            }
        }
    }
`

const GET_PRODUCT = gql`
    query Product($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                currency
                amount
            }
            brand
        }
    }
`

const GET_CURRENCIES = gql`
    query Currencies {
        currencies
    }
`

const GET_CATEGORY = gql`
    query CategoryInput($input: CategoryInput) {
        category(input: $input) {
            name
            products {
                            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                currency
                amount
            }
                brand
                }
            }
    }
`

export {
    GET_CATEGORIES,
    GET_CURRENCIES,
    GET_PRODUCT,
    GET_CATEGORY
}