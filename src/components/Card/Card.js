import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from '../../assets/shoppingCartWhite.png';
import { getProduct } from '../../services/services';
import { setProduct } from "../../redux/actions/actions"

import "./card.css"

class Card extends PureComponent {
    
    setPrice = () => {
        return this.props.price[this.props.products.currentCurrencyId].amount
    }

    render() {
        
        return (
            <div className={this.props.inStock ? "card" : "card un-stock-card"}>
                <div className="card-img">
                    {
                        !this.props.inStock && <div className="un-stock">OUT OF STOCK</div>
                    }
                    <img src={this.props.img[0]} alt="img" />
                    {
                        this.props.inStock && (
                            <div
                                onClick={async () => this.props.setProduct(await getProduct(this.props.id))}
                                className="shopping-cart-card">
                                <img src={ShoppingCart} alt="whiteCart" />
                            </div>
                        )
                    }
                </div>
                <div className="card-content">
                    <div className="card-name">{this.props.name}</div>
                    <div className="card-price">
                        {this.props.products.currentIcon}
                        {this.setPrice()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}

const mapDispatchToProps = {
    setProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);