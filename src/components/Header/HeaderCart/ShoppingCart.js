import React, { Component, forwardRef } from 'react';
import { connect } from 'react-redux';
import shoppingCartBlack from "../../../assets/shoppingCartBlack.png"

import "./shoppingCart.css"

class ShoppingCart extends Component {

    countTotalQty = () => {
        if(this.props.selectedProducts.length === 1) {
            return this.props.selectedProducts[0].qty
        } else {
            return this.props.selectedProducts.map(item => item.qty).reduce((a, b) => a + b)
        }
    }

    render() {
        return (
            <div onClick={() => this.props.onClick()} className="header-shopping-cart">
                {
                    this.props.selectedProducts.length !== 0 ? 
                        <div className="shopping-counter">
                            <span>{this.countTotalQty()}</span>
                        </div>
                        :
                        ''
                }
                <img ref={this.props.myRef} src={shoppingCartBlack} alt="blackCart" />
            </div>
        );
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const ConnectedMyComponent = connect(mapStateToProps)(ShoppingCart)
  
export default forwardRef((props, ref) =>
    <ConnectedMyComponent {...props} myRef={ref} />
);