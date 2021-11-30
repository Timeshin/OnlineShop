import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../../services/services';
import { getAllCurrencies, setCurrentCurrencyId, setCurrentIcon } from '../../../redux/actions/actions';

import "./currencies.css"

class CurrencySwitcher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeMenu: false
        }
    }

    async componentDidMount() {
        const data = await getCurrencies() 
        this.props.getAllCurrencies(data)
    }

    render() {
        return (
            <div
            onMouseEnter={() => this.setState({activeMenu: true})}
            onMouseLeave={() => this.setState({activeMenu: false})}
            className={this.state.activeMenu ? "drop-down-currency active" : "drop-down-currency"}>
                <div className="current-value">
                    <span>
                        {
                            this.props.products.currentIcon
                        }
                    </span>
                    <span className="arrow"></span>
                        <ul className="drop-down-content">
                        {
                            !this.props.active && this.props.categories.currencies.map((item, id) => {
                                return (
                                    <li
                                        className="drop-down-content-value"
                                        key={id}
                                        onClick={() => {
                                            this.props.setCurrentCurrencyId(id)
                                            this.props.setCurrentIcon(this.props.products.currencyIcons[id])
                                            this.setState({
                                                activeMenu: false
                                            })
                                        }}
                                    >
                                        {this.props.products.currencyIcons[id]} {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { products, categories } = state
    return { products, categories }
}

const mapDispatchToProps = {
    getAllCurrencies,
    setCurrentCurrencyId,
    setCurrentIcon
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);