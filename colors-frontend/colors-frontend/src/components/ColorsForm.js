import React, { Component } from 'react';

class ColorsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.activeColor ? props.activeColor.name : '',
      rgb_value: props.activeColor ? props.activeColor.rgb_value : '',
      hex_value: props.activeColor ? props.activeColor.hex_value : '',
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
          <label>name:</label><input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)}/><br/>
          <label>RGB:</label><input type="text" value={this.state.rgb_value} name="rgb_value" onChange={this.handleChange.bind(this)}/><br/>
          <label>HEX:</label><input type="text" value={this.state.hex_value} name="hex_value" onChange={this.handleChange.bind(this)}/><br/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default ColorsForm;