import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            rgb: [0,0,0],
            red: 0,
            green: 0,
            blue: 0
        }
    }

    getDatas(event) {
        event.preventDefault();
        const url = `http://www.thecolorapi.com/id?rgb=${this.state.red},${this.state.green},${this.state.blue}`
        fetch(url)
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                this.props.handleColor(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    swatchStyle() {
        return {
            width: '500px',
            height: '300px',
            margin: '0 auto',
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
        }
    }

    hendleColorRed(event) {
        const newColor = event.target.value;
        this.setState({
            red: newColor
        })
    }

    hendleColorGreen(event) {
        const newColor = event.target.value;
        this.setState({
            green: newColor
        })
    }

    hendleColorBlue(event) {
        const newColor = event.target.value;
        this.setState({
            blue: newColor
        })
    }

    renderColors(){
        
    }

    render() {
        return (
            <div className="ColorPicker">
                <div style={this.swatchStyle()}>
                </div>

                <form onSubmit={this.getDatas.bind(this)}>
                    <div>
                        <input type="range" max='255' min='0'
                            value={this.state.red}
                            onChange={this.hendleColorRed.bind(this)}
                        />
                        <input type="number"
                            value={this.state.red}
                            onChange={this.hendleColorRed.bind(this)}
                        />
                    </div>

                    <div>
                        <input type="range" max='255' min='0'
                            value={this.state.green}
                            onChange={this.hendleColorGreen.bind(this)}
                        />
                        <input type="number"
                            value={this.state.green}
                            onChange={this.hendleColorGreen.bind(this)}
                        />
                    </div>

                    <div>
                        <input type="range" max='255' min='0'
                            value={this.state.blue}
                            onChange={this.hendleColorBlue.bind(this)}
                        />
                        <input type="number"
                            value={this.state.blue}
                            onChange={this.hendleColorBlue.bind(this)}
                        />
                    </div>

                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default ColorPicker;