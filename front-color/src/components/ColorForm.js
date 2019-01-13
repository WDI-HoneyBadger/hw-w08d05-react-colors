import React, { Component } from 'react';

class ColorForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.activeColor ? props.activeColor.name : '',
      hex: props.activeColor ? props.activeColor.hex : '',
      rgb: props.activeColor ? props.activeColor.rgb : '',
      image: props.activeColor ? props.activeColor.image : '',
      contrast: props.activeColor ? props.activeColor.contrast : '',
      id: props.activeColor ? props.activeColor.id : null
    }
  }
  handleChange(event){
    const currentInput = event.target.name;
    const newValue = event.target.value;
    console.log('current input: ', currentInput);
    console.log('newValue: ', newValue);

    this.setState({
      [currentInput]: newValue
    }, function(){
      console.log(this.state);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }
  
  render(){
    return(
      <div className="modal">
        <form className="show-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="close-modal" onClick={()=>{this.props.toggleModal()}}>x</div>
          <label>Name:</label><input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)}/><br/>
          <label>HEX:</label><input type="text" value={this.state.hex} name="hex" onChange={this.handleChange.bind(this)}/><br/>
          <label>RGB:</label><input type="text" value={this.state.rgb} name="rgb" onChange={this.handleChange.bind(this)}/><br/>
          <label>Image:</label><input type="text" value={this.state.image}name="image" onChange={this.handleChange.bind(this)}/><br/>
          <label>Contrast:</label><input type="text" value={this.state.contrast}name="contrast" onChange={this.handleChange.bind(this)}/><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ColorForm;