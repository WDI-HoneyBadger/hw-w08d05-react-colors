import React, { Component } from 'react';

class ShowForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.activeShow ? props.activeShow.name : '',
      image: props.activeShow ? props.activeShow.image : '',
      description: props.activeShow ? props.activeShow.description : '',
      rating: props.activeShow ? props.activeShow.rating : '',
      id: props.activeShow ? props.activeShow.id : null
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
          <label>description:</label><input type="text" value={this.state.description} name="description" onChange={this.handleChange.bind(this)}/><br/>
          <label>image:</label><input type="text" value={this.state.image}name="image" onChange={this.handleChange.bind(this)}/><br/>
          <label>rating:</label><input type="number" value={this.state.rating}name="rating" onChange={this.handleChange.bind(this)}/><br/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default ShowForm;