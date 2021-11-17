import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOneProduct, addOneProduct } from "../../redux/actions/actions";

import "./productCart.css"

class ProductCart extends Component {
    render() {
        if(!this.props.products.selectedProducts.length) {
            return (
                <p style={{padding: "20px"}}>shopping cart is empty</p>
            )
        }
        return (
            this.props.products.selectedProducts.map((item, id) => {
                return (
                    <div key={id} className="product-cart-container">
                        <div className="product-cart">
                            <div className="product-cart-content">
                                <div className="product-cart-title">
                                    {item.brand} <br />
                                    {item.name}
                                </div>
                                <div className="product-cart-price">
                                    {this.props.products.currentIcon}
                                    {item.prices[this.props.products.currentCurrencyId].amount}
                                </div>
                                    {
                                        item.attributes.map((item, id) => {
                                            return (
                                                <div key={id} className="product-cart-attributes">
                                                    <div className="product-cart-attributes-name">
                                                        <div>{item.name}</div>
                                                    </div>
                                                    <div className="product-cart-attributes-content">
                                                    {
                                                        item.name === "Color"
                                                        ?
                                                        item.items.map((item, id) => {
                                                            return <p
                                                                key={id}
                                                                style={
                                                                    {
                                                                        background: item.value, 
                                                                        borderRadius: "50%", 
                                                                        padding: "10px",
                                                                        border: "none"
                                                                    }
                                                                    }/>
                                                        })
                                                        :
                                                        item.items.map((item, id) => {
                                                            return <p key={id}>{item.value}</p>
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            <div className="product-cart-counter">
                                <button onClick={() => this.props.addOneProduct(item)} className="plus">
                                    <i className="fas fa-plus"></i>
                                </button>
                                <div className="product-cart-count-content">
                                    {item.qty}
                                </div>
                                <button onClick={() => this.props.deleteOneProduct(item)} className="minus">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                            <div className="product-cart-images">
                                <img src={item.gallery[0]} alt="img" />
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}

const mapDispatchToProps = {
    deleteOneProduct,
    addOneProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);