import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOneProduct, addOneProduct } from "../../../redux/actions/actions";

class ProductCardQty extends Component {
    render() {
        return (
            <div className="product-qty">
                <div className="product-counter">
                    <button onClick={() => this.props.addOneProduct(this.props.item)} className="plus">
                        <i className="fas fa-plus"></i>
                    </button>
                    <div className="product-count-content">
                        {this.props.item.qty}
                    </div>
                    <button onClick={() => this.props.deleteOneProduct(this.props.item)} className="minus">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    deleteOneProduct,
    addOneProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardQty)