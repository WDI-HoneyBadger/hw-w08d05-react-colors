import React, { Component } from 'react';
import './App.css';
import Colors from './components/Colors';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numberRed: 22,
      numberGreen: 22,
      numberBlue: 22 , 
      color : []
    }
  }

  componentDidMount(){
    console.log('fetching data');
    fetch('http://localhost:3000/color')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          color: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }
  renderColors(allColors) {
  
    return allColors.map((color) => {
      console.log('colors' ,color)
      return (
        <Colors key={color.id}
          color={color}
          name={color.name} 
          red={color.red}
          green={color.green}
          blue={color.blue}

         />
      )
    })
  }
 

  boxContainerStyle() {
    return {
      width: '600px',
      height: '600px',
      backgroundColor: '#F0F0F0',
      border: '1px solid black',
      borderRadius: '7px',
      margin: '0 auto'
    }
  }
  innerBoxStyle() {
    return {
      width: '100%',
      height: '100%',
      backgroundColor: `rgb(${this.state.numberRed} ,${this.state.numberGreen} ,${this.state.numberBlue} )`,
      borderRadius: '7px'
    }
  }

  handleRedChange(event) {
    const newRed = event.target.value;
    this.setState({ numberRed: newRed })
  }
  handleGreenChange(event) {
    const newGreen = event.target.value;
    this.setState({ numberGreen: newGreen })
  }
  handleBlueChange(event) {
    const newBlue = event.target.value;
    this.setState({ numberBlue: newBlue })
  }

  render() {
    return (
      <div className="App">
        <h1>COLORS !</h1>
        <div style={this.boxContainerStyle()}>
          <div style={this.innerBoxStyle()}></div>
        </div>
        <p> Red {this.state.numberRed} </p>
        <input type="range" min="0" max="255"
          value={this.state.numberRed}
          onChange={this.handleRedChange.bind(this)}
          style={{ width: '600px', margin: '0 auto', display: 'flex', direction: 'colome' }} />

        <p> Green {this.state.numberGreen} </p>
        <input type="range" min="0" max="255"
          value={this.state.numberGreen}
          onChange={this.handleGreenChange.bind(this)}
          style={{ width: '600px', margin: '0 auto', display: 'flex', direction: 'colome' }} />

        <p> Blue  {this.state.numberBlue} </p>
        <input type="range" min="0" max="255"
          value={this.state.numberBlue}
          onChange={this.handleBlueChange.bind(this)}
          style={{ width: '600px', margin: '0 auto', display: 'flex', direction: 'colome' }} />
        <div>{this.renderColors(this.state.color)}</div>

      </div>
      
    );
  }
}

export default App;
