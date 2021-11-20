import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCart from '../../UI/ProductCart/ProductCart';

import "./cart.css"

class CartPage extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-container">
                    <div className="cart-name">
                        <p>cart</p>
                    </div>
                    <div className="cart-content">
                        <ProductCart slider={true} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}

export default connect(mapStateToProps)(CartPage);