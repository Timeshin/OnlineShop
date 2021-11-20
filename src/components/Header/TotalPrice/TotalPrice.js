import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TotalPrice extends Component {
    
    getPrice = () => {
        if(!this.props.selectedProducts.length) {
            return 0
        }
        const pricesArray = this.props.selectedProducts.map(item => {
            return item.prices[this.props.currentCurrencyId].amount * item.qty
        })
        return pricesArray.reduce((a, b) => a + b).toFixed(2)
    }
    
    render() {
        return (
            <>
                {this.props.currentIcon}{this.getPrice()}
            </>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}


export default connect(mapStateToProps)(TotalPrice)
