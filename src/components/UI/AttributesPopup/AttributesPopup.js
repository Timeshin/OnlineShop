import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductAttributes from '../ProductAttributes/ProductAttributes'
import { clearAttributes } from '../../../redux/actions/actions'
import AddToCardButton from '../AddToCardButton/AddToCardButton'

import "./attributesPopup.css"

class AttributesPopup extends Component {

    componentDidMount() {
        this.props.clearAttributes()
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible"
    }

    render() {
        return (
            <div
            onClick={() => this.props.setActivePopup()}
            className="attributes-popup-wrapper">
                <div
                onClick={(e) => e.stopPropagation()}
                className="attributes-popup">
                    {
                        this.props.selectedProduct.product.attributes.length === 0 ? 
                        <h2>There are no attributes</h2> :
                        <h2>Please select attributes</h2>
                    }
                    {
                        this.props.selectedProduct.product.attributes.map((attributeName, id) => {
                            return <ProductAttributes
                                allowSetAttribute={true}
                                key={id}
                                attributeName={attributeName}
                                elem={this.props.selectedProduct.product} />
                        })
                    }
                    <div onClick={() => this.props.setActivePopup()}>
                        <AddToCardButton/>
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
    clearAttributes
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesPopup)