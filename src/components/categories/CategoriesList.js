import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from '../navLinks/NavLink'
import { getCategories } from '../../services/services' 
import { getAllProducts } from "../../redux/actions/actions"

export class CategoriesList extends Component {
    async componentDidMount() {
        const data = await getCategories()
        this.props.getAllProducts(data)
    }

    render() {
        return (
            <>
                {
                    this.props.categories.map((item, id) => {
                        return <Link key={id} path={item.name}>{item.name}</Link>
                    })
                }
            </>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return categories
}

const mapDispatchToProps = {
    getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
