import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from '../../../assets/shoppingCartWhite.png';
import { getProduct } from '../../../services/services';
import { setProduct, setCurrentProduct } from "../../../redux/actions/actions"
import { withRouter } from 'react-router-dom';
import AttributesPopup from "../AttributesPopup/AttributesPopup"

import "./card.css"

class Card extends PureComponent {

    constructor(props) {
        super(props)
        
        this.state = {
            activePopup: false
        }
    }
    
    setPrice = () => {
        return this.props.price[this.props.currentCurrencyId].amount
    }

    render() {
        return (
            <>
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
                                <div
                                    onClick={async (e) => {
                                        e.stopPropagation()
                                        this.props.setCurrentProduct(await getProduct(this.props.id))
                                        this.setState({
                                            activePopup: !this.state.activePopup
                                        })
                                    }}
                                    className="shopping-cart-card"
                                >
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
                {
                    this.state.activePopup && 
                    <AttributesPopup
                    activePopup={this.state.activePopup}
                    setActivePopup={() => this.setState({activePopup: !this.state.activePopup})}
                    />
                }
            </>
        )
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