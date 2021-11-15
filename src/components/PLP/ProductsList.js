import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../services/services' 
import { getAllProducts } from "../../reducer/getDataSlice"

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
    
    async componentDidMount() {
        const data = await getCategories()
        this.props.getAllProducts(data)
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.name !== this.props.match.params.name) {
            this.setState({
                products: this.getProducts()
            })
            return true
        }
    }
// this.props.match.params.name
    render() {
        return (
            <div className="products">
                {
                    this.state.products.map((item, id) => {
                        console.log(item)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return categories
}

const mapDispatchToProps = {
    getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
