import React, { Component } from 'react';

class NewColor extends Component {
  constructor(props){
    super(props)
    this.state={
      Red: 0,
      Blue: 0,
      Green: 0,
      
    }
  }

  barContainerStyle(){
    return{
      width:'20%',
      height: '100px',
      backgroundColor: `${this.state.Red} ${this.state.Blue} ${this.state.Green}`,
      border: '1px solid black',
      margin: '0 auto'
    }
  }

  changeColor(event){
    const newValue = event.target.value;
    this.setState({color: newValue});
}

  innerBarStyle(){
    return{
      width: `${this.state.progress}%`,
      height: '100%',
      backgroundColor : `rgb(${this.state.Red} ${this.state.Blue} ${this.state.Green})`,

    }
  }

  handleProgressChange(event){
    const newProgress = event.target.value;
    this.setState({progress: newProgress})
  }
  
  handleProgressChangeColor(event){
    const newProgress = event.target.value;
    this.setState({progress: newProgress})
  }

  innerBarColor(){
    return{
      width: `${this.state.color}%`,
      height: '300%',
      backgroundColor : `${this.state.Red} ${this.state.Blue} ${this.state.Green}`,
      borderRadius: '7px'
    }
  }


RedColor(event){
    const newValue = event.target.value;
    this.setState({Red: newValue});
}


BlueColor(event){
  const newValue = event.target.value;
  this.setState({Blue: newValue});
}


GreenColor(event){
  const newValue = event.target.value;
  this.setState({Green: newValue});
}
  render() {
    return (
      <div className="App">
       <h1>Add New Color</h1>
      
        <div style={this.barContainerStyle()} >
          <div style={this.innerBarStyle()}> </div>
        </div>

        <div>
            <br></br>
       Red <input type="range" max="255" 
           value={this.state.Red}
           onChange={this.RedColor.bind(this)}/>{this.state.Red}
           </div>


        <div>
      
        Green<input type="range" max="255" 
           value={this.state.Blue}
           onChange={this.BlueColor.bind(this)}/>{this.state.Green}
          <br></br>
           </div>

        <div>
        Blue<input type="range" max="255" 
           value={this.state.Green}
           onChange={this.GreenColor.bind(this)}/>{this.state.Blue}
          <br></br>
           </div>
           <button>submit</button>
      </div>
    );
  }
}

export default NewColor ;