import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductCart from '../../UI/ProductCart/ProductCart'
import TotalPrice from '../TotalPrice/TotalPrice'
import { sendData } from '../../../redux/actions/actions'

import "./cartDropdown.css"

export class CartDropdown extends Component {
    render() {
        return (
            <div onMouseDown={() => this.props.onClick()} className="cart-drop-down-wrapper">
                <div className="cart-drop-down-container">
                    <div onMouseDown={(e) => e.stopPropagation()} className="cart-drop-down">
                        <div className="cart-drop-down-title">
                            My Bag, <span>{this.props.selectedProducts.length} items</span>
                        </div>
                        <div className="cart-drop-down-content">
                            <ProductCart slider={false} />
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
                            <div onClick={() => {
                                if(this.props.selectedProducts.length) {
                                    this.props.onClick()
                                    this.props.sendData()
                                    alert("products were sent")
                                }
                            }} className="check-out">
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
    return products
}

const mapDispatchToProps = {
    sendData
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
