import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAttributes, setAttributes } from "../../../redux/actions/actions"

class ProductAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
    }
    

    addAttribute = (attribute) => {
        return this.props.addAttributes(
            {
                element: this.props.elem, 
                key: this.props.attributeName.name,
                value: attribute.value
            }
        )
    }

    findAttributeValue = (attributeName) => {
        return Object.keys(this.props.elem).find(key => this.props.elem[key] === attributeName)
    }

    render() {
        return (
            <div className="product-attributes">
                <div className="product-attributes-name">
                    <div>{this.props.attributeName.name}:</div>
                </div>
                <div className="product-attributes-content">
                {
                    this.props.attributeName.name === "Color"
                    ?
                    this.props.attributeName.items.map((attribute, id) => {
                        return <p
                            key={id}
                            className={
                                (this.props.elem[this.props.attributeName.name] === attribute.value ||
                                    id === this.state.active
                                )
                                ? 
                                "color-attribute selected"
                                :
                                "color-attribute"
                            }
                            onClick={() => {
                                this.setState({
                                    active: id
                                })
                                this.addAttribute(attribute)
                                if(this.props.allowSetAttribute)
                                return this.props.setAttributes({key: this.props.attributeName.name, value: attribute.value})
                            }}
                            style={{background: attribute.value}}/>
                    })
                    :
                    this.props.attributeName.items.map((attribute, id) => {
                        return <p
                            className={
                                (this.props.elem[this.props.attributeName.name] === attribute.value || 
                                    id === this.state.active
                                )
                                ? 
                                "options selected"
                                :
                                "options"}
                            key={id}
                            onClick={(e) => {
                                this.setState({
                                    active: id
                                })
                                e.target.className = "options selected"
                                if(this.props.allowSetAttribute)
                                return this.props.setAttributes({key: this.props.attributeName.name, value: attribute.value})
                                this.addAttribute(attribute)
                            }}
                        >
                            {attribute.value}
                        </p>
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    addAttributes,
    setAttributes
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes) ;