import React, { Component } from 'react';

class ColorTile extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    tileStyle() {
        return {
            borderRadius: '10px',
            width: '150px',
            height: '150px',
            backgroundColor: `rgb(${this.props.color.red}, ${this.props.color.green}, ${this.props.color.blue})`
        }
    }

    renderHover() {
        return (
            <div className="hover">
                <div className="delete" onClick={() => this.props.deleteColor(this.props.color.id)}>Delete</div>
                <div className="hoverInfo">
                    <h4>{this.props.color.name}</h4>
                    <h5>{this.props.color.hex}</h5>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div style={this.tileStyle()} onClick={() => this.props.changeActiveColor(this.props.color)}
                 onMouseEnter={() => this.setState({ hover: true })}
                 onMouseLeave={() => this.setState({ hover: false })}>
                {(this.state.hover) ? this.renderHover() : ''}

                {/* <h4>{this.props.color.name} </h4> */}
            </div>
        )
    }
}

export default ColorTile;