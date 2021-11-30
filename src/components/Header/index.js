import React, { Component, createRef } from 'react'
import CategoriesList from './Categories/CategoriesList'
import CurrenciesSwitcher from './CurrenciesSwitcher/CurrenciesSwitcher'
import ShoppingCart from "./HeaderCart/ShoppingCart"
import CartDropdown from './CartDropdown/CartDropdown';

import "./index.css"
import SearchPanel from './SearchPanel/SearchPanel';

export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeMenu: false
        }
        this.shoppingCartRef = createRef()
    }

    render() {
        if(this.state.activeMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
        return (
            <>
                <header onClick={(e) => {
                    if(e.target !== this.shoppingCartRef.current) {
                        this.setState({
                            activeMenu: false
                        })
                    }
                }}>
                    <div className="header-content">
                        <nav className="header-navigation">
                            <CategoriesList/>
                        </nav>
                        <div className="logo">
                            <img src="Grouplogo.svg" alt="img" />
                        </div>
                        <div className="end-header">
                            <SearchPanel />
                            <CurrenciesSwitcher active={this.state.activeMenu} />
                            <ShoppingCart ref={this.shoppingCartRef} onClick={() => this.setState({activeMenu: !this.state.activeMenu})} />
                        </div>
                    </div>
                </header>
                {
                    this.state.activeMenu && <CartDropdown onClick={() => this.setState({activeMenu: !this.state.activeMenu})} />
                }
            </>
        )
    }
}

export default Header
