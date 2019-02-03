import React, { Component } from 'react';

class Color extends Component{
  constructor(){
    super();
    this.state = {
      hovered: false
    }
  }

  toggleHover(){
    this.setState({hovered: !this.state.hovered})
  }

  backgroundStyle(){
    return {
      backgroundColor: this.props.color.hex
    }
  }
  renderContent(){
    if(this.props.isPicked){
      return(
        <div>
          Cancel
        </div>
      )
    } else if(this.state.hovered){
      return(
        <div className="color-info">
          <h4>{this.props.color.name}</h4>
          <p>{this.props.color.hex}</p>
          <p>{`rgb(${this.props.color.red}, ${this.props.color.green}, ${this.props.color.blue})`}</p>
        </div>
      )
    }
  }

  handleClick(){
    if(this.props.isPicked){
      this.props.randomizePicker()
    }else{
      this.props.changePickerColor()
    }
  }

  render(){
    return(
      <div className="color" style={this.backgroundStyle()} 
        onMouseOver={this.toggleHover.bind(this)} 
        onMouseOut={this.toggleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
      { this.renderContent() }
        <button className="delete" onClick={this.props.deleteColor}>Delete</button>
      </div>
    )
  }
}

export default Color