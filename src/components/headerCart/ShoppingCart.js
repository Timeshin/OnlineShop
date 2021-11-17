import React, { Component } from 'react';
import { connect } from 'react-redux';
import shoppingCartBlack from "../../assets/shoppingCartBlack.png"

import "./shoppingCart.css"

class ShoppingCart extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="header-shopping-cart">
                {
                    this.props.products.selectedProducts.length !== 0 ? 
                        <div className="shopping-counter">
                            <span>{this.props.products.selectedProducts.length}</span>
                        </div> 
                        :
                        ''
                }
                <img src={shoppingCartBlack} alt="blackCart" />
            </div>
        );
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}

export default connect(mapStateToProps)(ShoppingCart);