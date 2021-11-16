import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'

import "./procutList.css"

class ProductsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    getProducts = () => {
        return this.props.categories.map(item => item.name === this.props.match.params.name ? item.products : null)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.name !== this.props.match.params.name || prevProps.categories !== this.props.categories) {
            this.setState({
                products: this.getProducts()
            })
            return true
        }
    }

    render() {
        return (
            <div className="products">
                <div className="products-content">
                    <div className="category-name">
                        <p>{this.props.match.params.name}</p>
                    </div>
                    <div className="content">
                        {
                            this.state.products.map(arr => {
                                if(Array.isArray(arr)) {
                                    return arr.map(item =>
                                    <Card
                                        key={item.id}
                                        name={item.name}
                                        id={item.id}
                                        inStock={item.inStock}
                                        img={item.gallery}
                                        price={item.prices} />)
                                }
                                return null
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return categories
}


export default connect(mapStateToProps)(ProductsList)
