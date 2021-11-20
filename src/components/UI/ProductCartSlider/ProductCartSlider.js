import React, { Component } from 'react';

import "./productCardSlider.css"

class ProductCartSlider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 0
        }
    }

    nextSlide = () => {
        if(this.props.images.length - 1 === this.state.currentSlide) {
            this.setState({
                currentSlide: 0
            })
        } else {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            })
        }
    }

    prevSlide = () => {
        if(this.state.currentSlide === 0) {
            this.setState({
                currentSlide: this.props.images.length - 1
            })
        } else {
            this.setState({
                currentSlide: this.state.currentSlide - 1
            })
        }
    }

    render() {
        if(this.props.images.length === 1) {
            return <img src={this.props.images[0]} alt="" />
        }
        return (
            <div className="slider">
                <div style={{transform: `translate(-${150 * this.state.currentSlide}px)`}} className="slider-content">
                    {
                        this.props.images.map((item, id) => 
                            <img key={item} src={item} alt={id} />
                        )
                    }
                </div>
                <div className="arrows">
                    <button onClick={() => this.prevSlide()} className="left-arrow">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={() => this.nextSlide()} className="right-arrow">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        )
        
    }
}

export default ProductCartSlider;