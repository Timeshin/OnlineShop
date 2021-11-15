import { gql } from '@urql/core';

const GET_CATEGORIES = gql`
    query Categories {
        categories {
            name
            products {
            id
            name
            inStock
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

const GET_CURRENCIES = gql`
    query Currencies {
        currencies
    }
`

export {
    GET_CATEGORIES,
    GET_CURRENCIES
}