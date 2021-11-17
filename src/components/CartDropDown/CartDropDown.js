import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductCart from '../procutCart/ProductCart'
import TotalPrice from '../totalPrice/TotalPrice'

import "./cartDropDown.css"

export class CartDropDown extends Component {
    render() {
        return (
            <div onMouseDown={() => this.props.onClick()} className="cart-drop-down-wrapper">
                <div className="cart-drop-down-container">
                    <div onMouseDown={(e) => e.stopPropagation()} className="cart-drop-down">
                        <div className="cart-drop-down-title">
                            My Bag, <span>{this.props.products.selectedProducts.length} items</span>
                        </div>
                        <div className="cart-drop-down-content">
                            <ProductCart />
                        </div>
                        <div className="cart-drop-down-total-price">
                            <div className="total">
                                Total:
                            </div>
                            <div className="price">
                                <TotalPrice/>
                            </div>
                        </div>
                        <div className="cart-drop-down-end">
                            <NavLink onClick={() => this.props.onClick()} to="/cart" className="bag">
                                VIEW BAG
                            </NavLink>
                            <div className="check-out">
                                CHECK OUT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}

export default connect(mapStateToProps)(CartDropDown)
