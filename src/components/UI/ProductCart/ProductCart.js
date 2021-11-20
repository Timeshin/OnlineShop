import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCardQty from '../ProductCardQty/ProductCardQty';
import ProductCartSlider from '../ProductCartSlider/ProductCartSlider';
import ProductAttributes from "../ProductAttributes/ProductAttributes"

import "./productCart.css"

class ProductCart extends Component {
    render() {
        if(!this.props.selectedProducts.length) {
            return (
                <p style={{padding: "20px"}}>shopping cart is empty</p>
            )
        }
        return (
            this.props.selectedProducts.map((item, id) => {
                return (
                    <div key={id} className="product-container">
                        <div className="product">
                            <div className="product-characteristics">
                                <div className="product-title">
                                    <span>{item.brand}</span> <br />
                                    <span>{item.name}</span>
                                </div>
                                <div className="product-price">
                                    {this.props.currentIcon}
                                    {item.prices[this.props.currentCurrencyId].amount}
                                </div>
                                {
                                    item.attributes.map((attributeName, id) => 
                                        <ProductAttributes key={id} attributeName={attributeName} elem={item} />
                                    )
                                }
                            </div>
                            <div className="product-end">
                                <ProductCardQty item={item} />
                                <div className="product-images">
                                    <ProductCartSlider images={this.props.slider ? item.gallery : [item.gallery[0]]} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}



export default connect(mapStateToProps)(ProductCart);