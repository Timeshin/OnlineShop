import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductAttributes from '../../UI/ProductAttributes/ProductAttributes';
import { setProduct, clearAttributes } from '../../../redux/actions/actions';

import "./productPage.css"

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImg: 0,
            active: 0
        }
    }
    
    componentDidMount() {
        this.props.clearAttributes()
    }

    componentWillUnmount() {
        this.props.clearAttributes()
    }

    render() {
        if(Object.keys(this.props.selectedProduct).length === 0){
            return <h1> Loading... </h1>
        } else {
            return (
                <div className="product-page-container">
                    <div className="product-page">
                        <ul className="product-page-img-list">
                            {
                                this.props.selectedProduct.product.gallery.map((item, id) =>
                                    <li key={item} onClick={() => this.setState({currentImg: id})}>
                                        <img src={item} alt={id} />
                                    </li>
                                )
                            }
                        </ul>
                        <div className="product-page-current-img">
                            <img src={this.props.selectedProduct.product.gallery[this.state.currentImg]} alt="mainImg" />
                        </div>
                        <div className="product-page-content">
                            <div className="product-page-title">
                                <p className="brand">{this.props.selectedProduct.product.brand}</p> <br/>
                                <p className="name">{this.props.selectedProduct.product.name}</p>
                            </div>
                            {
                                this.props.selectedProduct.product.attributes.map((item, id) => 
                                    <ProductAttributes
                                    key={id}
                                    attributeName={item}
                                    elem={this.props.selectedProduct.product}
                                    />
                                )
                            }
                            <div className="product-page-price">
                                <p className="price">price:</p>
                                <p>
                                {this.props.currentIcon}
                                {this.props.selectedProduct.product.prices[this.props.currentCurrencyId].amount}
                                </p>
                            </div>
                            <button onClick={() => {
                                this.props.setProduct({product: {...this.props.selectedProduct.product, ...this.props.attribute}})
                            }} className="add-btn">
                                add to cart
                            </button>
                            <div className="product-page-description"
                                dangerouslySetInnerHTML={{__html: this.props.selectedProduct.product.description}}
                            />
                        </div>
                    </div>
                </div>   
            )
        }
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    setProduct,
    clearAttributes
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);