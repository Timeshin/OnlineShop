import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import "./navLink.css"

class Link extends Component {
    render() {
        return (
            <NavLink
                to={this.props.path}
                className={({ isActive }) => "category" + (isActive ? " active" : "")}
            >
                {this.props.children}
            </NavLink>
        );
    }
}

export default Link;