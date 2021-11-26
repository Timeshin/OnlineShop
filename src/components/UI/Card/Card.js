import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from '../../../assets/shoppingCartWhite.png';
import { getProduct } from '../../../services/services';
import { setProduct, setCurrentProduct } from "../../../redux/actions/actions"
import { withRouter } from 'react-router-dom';

import "./card.css"

class Card extends PureComponent {
    
    setPrice = () => {
        return this.props.price[this.props.currentCurrencyId].amount
    }

    render() {
        return (
            <div 
                onClick={async () => {
                    this.props.history.push(`${this.props.location.pathname}/${this.props.id}`)
                    this.props.setCurrentProduct(await getProduct(this.props.id))
                }}
                className={this.props.inStock ? "card" : "card un-stock-card"}>
                <div className="card-img">
                    {
                        !this.props.inStock && <div className="un-stock">OUT OF STOCK</div>
                    }
                    <img src={this.props.img[0]} alt="img" />
                    {
                        this.props.inStock && (
                            <div className="shopping-cart-card">
                                <img src={ShoppingCart} alt="whiteCart" />
                            </div>
                        )
                    }
                </div>
                <div className="card-content">
                    <div className="card-name">{this.props.brand} {this.props.name}</div>
                    <div className="card-price">
                        {this.props.currentIcon}
                        {this.setPrice()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    setProduct,
    setCurrentProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));