import React, { Component } from 'react'
import CategoriesList from '../categories/CategoriesList'
import CurrencySwitcher from '../currencySwitcher/CurrencySwitcher'
import ShoppingCart from "../headerCart/ShoppingCart"
import CartDropDown from '../CartDropDown/CartDropDown';

import "./header.css"

export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeMenu: false
        }
    }

    render() {
        if(this.state.activeMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
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
                        <CurrencySwitcher/>
                        <ShoppingCart onClick={() => this.setState({activeMenu: !this.state.activeMenu})} />
                    </div>
                </div>
                {
                    this.state.activeMenu && <CartDropDown onClick={() => this.setState({activeMenu: !this.state.activeMenu})} />
                }
            </header>
        )
    }
}

export default Header
