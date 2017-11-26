import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div className="slide">
                <div className="slide-inner">
                    <div className="slide-image-wrapper">
                        <img src={this.props.image} alt={this.props.imageAlt} />
                    </div>
                    <h2>{this.props.body}</h2>
                </div>
            </div>
        )
    }
}

export default Slide