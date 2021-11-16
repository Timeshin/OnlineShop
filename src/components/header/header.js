import React, { Component } from 'react'
import CategoriesList from '../categories/CategoriesList'
import CurrencyDropDown from '../currency/Currency'
import ShoppingCar from '../UI/ShoppingCar'

import "./header.css"

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <nav className="header-navigation">
                        <CategoriesList/>
                    </nav>
                    <div className="logo">
                        <img src="Grouplogo.svg" alt="img" />
                    </div>
                    <div className="end-header">
                        <CurrencyDropDown/>
                        <ShoppingCar/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
