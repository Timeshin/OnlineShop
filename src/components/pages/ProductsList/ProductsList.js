import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '../../UI/Card/Card'

import "./productList.css"

class ProductsList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    getProducts = () => {
        if(this.props.match.params.name === "all") {
            return this.props.products.allProducts.category.products
        }
        return this.props.categories.categories.map(item => item.name === this.props.match.params.name ? item.products : "")
    }

    componentDidMount() {
        this.setState({
            products: this.getProducts()
        })
    }

    componentDidUpdate(prevProps) {
        if(
            prevProps.match.params.name !== this.props.match.params.name ||
            prevProps.categories !== this.props.categories
        ) {
            this.setState({
                products: this.getProducts()
            })
        }
    }

    render() {
        return (
            <div className="products">
                <div className="products-content">
                    <div className="category-name">
                        <p>{this.props.match.params.name}</p>
                    </div>
                    {
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
                                            price={item.prices} />
                                        )
                                    }
                                    if(typeof arr === "object") {
                                        return <Card
                                        key={arr.id}
                                        name={arr.name}
                                        id={arr.id}
                                        inStock={arr.inStock}
                                        img={arr.gallery}
                                        price={arr.prices} />
                                    }
                                    return null
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({categories, products}) => {
    return {categories, products}
}


export default connect(mapStateToProps)(ProductsList)
