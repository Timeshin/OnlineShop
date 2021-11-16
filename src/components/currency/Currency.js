import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../services/services';
import { getAllCurrencies } from '../../reducer/getDataSlice';
import { setCurrentCurrency } from '../../reducer/setDataSlice';

import "./currency.css"

class CurrencyDropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeMenu: false
        }
        this.currencyIcons = {
            0: "$",
            1: "€",
            2: "¥",
            3: "£",
            4: "₽"
        }
    }

    async componentDidMount() {
        const data = await getCurrencies() 
        this.props.getAllCurrencies(data)
    }

    render() {
        return (
            <div className={this.state.activeMenu ? "drop-down-currency active" : "drop-down-currency"}>
                <div
                    className={"current-value"}
                        onClick={() => this.setState({activeMenu: !this.state.activeMenu})}>
                    <span style={{paddingRight: "10px"}}>
                        {
                            this.currencyIcons[this.props.products.currentCurrency]
                        }
                    </span>
                    <span className="arrow"></span>
                </div>
                <div className="drop-down-content">
                    {
                        this.props.categories.currencies.map((item, id) => {
                            return (
                                <div
                                    className="drop-down-content-value"
                                    key={id}
                                    onClick={() => {
                                        this.props.setCurrentCurrency(id)
                                        this.setState({
                                            activeMenu: false
                                        })
                                    }}
                                >
                                    {this.currencyIcons[id]} {item}
                                </div>
                            )
                        })
                    }
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
    setCurrentCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropDown);