import React, { Component } from 'react';
import ColorInput from'./ColorInput';

class ColorPicker extends Component {
    constructor(){
        super();
        this.state = {
          red: this.randomColor(),
          green: this.randomColor(),
          blue: this.randomColor(),
          selectedColor: {name: '', rgb: '' , hex: ''} 
        }
      }

      randomColor(){
          return Math.floor(Math.random() * Math.floor(255));
      }

    updateColor(color, value) {
          const newColor = this.state;
          newColor[color] = value;
          this.setState({newColor})
      }

    handleSubmit(event) {
        event.preventDefault();
        const url = `http://thecolorapi.com/id?rgb=rgb(${this.state.red},${this.state.green},${this.state.blue})`;

        fetch(url)
            .then(respons => respons.json())
            .then( data =>{
                console.log(data)
                this.setState({selectedColor: {name: data.name.value, rgb: data.rgb.value , hex: data.hex.value}})
                this.props.handleSubmit(this.state.selectedColor);
            })
            .catch(error => {
                console.log(error)
            })
    }

    displayColor() {
        if(this.props.activeColor === null) {
            return {
                backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})`
            }
        } else {
            return {
                backgroundColor: this.props.activeColor.rgb
            }
        }

    }


    render() {
        return(
            <div className="color-picker-container">
               <p>Choose Your Color</p> 
               <form onSubmit={this.handleSubmit.bind(this)}>
               <div className="color-input">
                    <div className="color-display" style={this.displayColor()}></div>
                    <ColorInput color='red' value={this.state.red}
                            updateColor={this.updateColor.bind(this)}
                            style={ {margin: '0 auto'}} /> 
                    <ColorInput color='green' value={this.state.green}
                            updateColor={this.updateColor.bind(this)} /> 
                    <ColorInput color='blue' value={this.state.blue}
                            updateColor={this.updateColor.bind(this)} /> 
                    { (this.props.activeColor === null)? 
                            <button className="submit-color">SUBMIT</button>  : 
                            <button className="submit-color">Save Change</button> }
                    { this.props.activeColor !== null ?
                            <button className="new-color" onClick={this.props.toggleActiveColor}>New</button> :
                            '' }
                </div>
                </form>
            </div>
        )
    }
}

export default ColorPicker;