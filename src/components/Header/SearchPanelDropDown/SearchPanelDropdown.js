import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCategoryByInput } from '../../../services/services';
import { setAllProducts } from '../../../redux/actions/actions';

import "./searchPanelDropdown.css"

class SearchPanelDropdown extends Component {

    async componentDidMount() {
        this.props.setAllProducts(await getCategoryByInput(this.props.input))
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.input !== this.props.input) {
            this.props.setAllProducts(await getCategoryByInput(this.props.input))
            return true
        }
    }

    render() {
        return (
            <div className="search-panel-dropdown">
                <div className="search-panel-dropdown-content">
                    <p
                    className={this.props.active ? "active" : ""}
                    onClick={() => {
                        this.props.setActive()
                        this.props.history.push(this.props.allProducts.category.name)
                    }}>
                        {
                            this.props.allProducts.category
                            ?
                            this.props.allProducts.category.name
                            :
                            null
                        }
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return products
}

const mapDispatchToProps = {
    setAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPanelDropdown))