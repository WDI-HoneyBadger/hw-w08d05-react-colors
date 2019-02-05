import React, { Component } from 'react';

class ColorForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.implmantionColors ? props.implmantionColors.name : '',
      hex: props.implmantionColors ? props.implmantionColors.hex : '',
      image: props.implmantionColors ? props.implmantionColors.image : '',
      id: props.implmantionColors ? props.implmantionColors.id : null
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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div onClick={()=>{this.props.toggleModal()}}>x</div>
          <label>Name:</label><input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)}/><br/>
          <label>HEX:</label><input type="text" value={this.state.hex} name="hex" onChange={this.handleChange.bind(this)}/><br/>          
          <label>Image:</label><input type="text" value={this.state.image}name="image" onChange={this.handleChange.bind(this)}/><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ColorForm;