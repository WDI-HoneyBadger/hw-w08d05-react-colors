import React, { Component } from 'react';
import ColorInput from './ColorInput';

class ColorPicker extends Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    results:[]
    }
  }

  swatchStyle(){
    return {
      width: '500px',
      height: '300px',
      margin: '0 auto',
      backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
    }
  }

  updateRed(value){
    this.setState({red: value})
  }

  updateGreen(value){
    this.setState({green: value})
  }

  updateColor(color, value){
    const newColors = this.state
    newColors[color] = value
    this.setState(newColors)
  }

  createNew(event) {
    event.preventDefault();
    const url = `http://thecolorapi.com/id?rgb=rgb(${this.state.red},${this.state.green},${this.state.blue})`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data from api: ', data)
        this.setState({
            results:{name: data.name.value,
            hex_value: data.hex.value,
            rgb_value: data.rgb.value
        }})
        this.props.saveColor(this.state.results)
        console.log('result',this.state.results)
      })
      .catch(error => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        <div style={this.swatchStyle()}></div>
        <form onSubmit={this.createNew.bind(this)}>
        <ColorInput color='red' value={this.state.red}
                    updateColor={this.updateColor.bind(this)} /> 
        <ColorInput color='green' value={this.state.green}
                    updateColor={this.updateColor.bind(this)} /> 
        <ColorInput color='blue' value={this.state.blue}
                    updateColor={this.updateColor.bind(this)} /> 
        <button  >Add Color</button>
        </form>
      </div>
    )
  }
}

export default ColorPicker;