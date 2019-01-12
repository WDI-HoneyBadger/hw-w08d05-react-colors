import React, { Component } from 'react';
import ColorInput from '../components/ColorInput';

class ColorDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            red: props.activeColor.red,
            green: props.activeColor.green,
            blue: props.activeColor.blue,
            hex: ''
        }
    }

    componentDidMount(){
        this.colorFetch();
    }

    updateColor(value, color) {
        this.setState({ [color]: value }, this.colorFetch);
    }

    colorDisplayStyle() {
        return {
            margin: '0 auto',
            width: '400px',
            height: '300px',
            border: 'solid black 1px',
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }
    }

    colorFetch() {
        const url = `http://www.thecolorapi.com/id?rgb=${this.state.red},${this.state.green},${this.state.blue}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({

                    name: data.name.value,
                    hex: data.hex.value,

                });
            })
    }

    render() {
        return (
            <div className="displayContainer">

                <div style={this.colorDisplayStyle()}></div>
                {/* {this.renderColorInputs()} */}
                <br />
                <ColorInput color='red' value={this.state.red}
                    updateColor={this.updateColor.bind(this)} />
                <ColorInput color='green' value={this.state.green}
                    updateColor={this.updateColor.bind(this)} />
                <ColorInput color='blue' value={this.state.blue}
                    updateColor={this.updateColor.bind(this)} />
                <h4>Hex Value: {this.state.hex}</h4>
                <h4>Color Name: {this.state.name}</h4>
                <button onClick={() => this.props.createColor(this.state)}>Submit</button>
            </div>
        )
    }
}

export default ColorDisplay;