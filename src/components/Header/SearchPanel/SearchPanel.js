import React, { Component } from 'react';
import SearchPanelDropdown from '../SearchPanelDropDown/SearchPanelDropdown';

import "./searchPanel.css"

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            input: ""
        }
    }

    render() {
        return (
            <div className="search-panel">
                <div className="search-panel-container">
                    <input onChange={(e) => this.setState({
                        input: e.target.value
                    })}
                    className={this.state.active ? "search-field active" : "search-field"} type="text" value={this.state.input} />
                    <SearchPanelDropdown
                    input={this.state.input}
                    active={this.state.active}
                    setActive={() => this.setState({ active: false, input: "" })} />
                </div>
                <span onClick={(e) => {
                    this.setState({
                        active: !this.state.active,
                        input: ""
                    })
                }} className="search">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        )
    }
}

export default SearchPanel;