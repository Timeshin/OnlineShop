import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProduct } from '../../../redux/actions/actions';

import "./addToCardButton.css"

class AddToCardButton extends Component {
    render() {
        return (
            this.props.selectedProduct.product.inStock ?
            <button
            disabled={
                this.props.selectedProduct.product.attributes.length === Object.keys(this.props.attribute).length
                ?
                false
                :
                true
            }
            onClick={() => {
                this.props.setProduct({product: {...this.props.selectedProduct.product, ...this.props.attribute}})
            }} className="add-btn"
            >
                add to cart
            </button>
            :
            <h2 className="product-page-stock">OUT OF STOCK</h2>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    setProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCardButton)