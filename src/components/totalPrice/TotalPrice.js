import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TotalPrice extends Component {
    
    getPrice = () => {
        if(!this.props.products.selectedProducts.length) {
            return 0
        }
        const pricesArray = this.props.products.selectedProducts.map(item => {
            return item.prices[this.props.products.currentCurrencyId].amount * item.qty
        })
        return pricesArray.reduce((a, b) => a + b).toFixed(2)
    }
    
    render() {
        return (
            <>
                {this.props.products.currentIcon}{this.getPrice()}
            </>
        )
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}


export default connect(mapStateToProps)(TotalPrice)
