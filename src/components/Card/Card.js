import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import "./card.css"

class Card extends PureComponent {

    setPrice = () => {
        return this.props.price[this.props.products.currentCurrency].amount
    }
    render() {
        console.log(this.props)
        return (
            <div className={this.props.inStock ? "card" : "card un-stock-card"}>
                <div className="card-img">
                    {
                        !this.props.inStock && <div className="un-stock">OUT OF STOCK</div>
                    }
                    <img src={this.props.img[0]} alt="img" />
                </div>
                <div className="card-content">
                    <div className="card-name">{this.props.name}</div>
                    <div className="card-price">{this.setPrice()}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({products}) => {
    return { products }
}

export default connect(mapStateToProps)(Card);