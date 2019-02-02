import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import ResultColor from './components/ResultColor';

class App extends Component {

  constructor() {
    super()
    this.state = {
      rgb: '',
      name: '',
      hex: '',
      colors: []
    }
  }
  componentDidMount() {
    const url = 'http://localhost:3000/colors'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          colors: data
        })
        
      })
      .catch(error => {
        console.log(error)
      })
  }

  createNewColor(color) {
    const url = 'http://localhost:3000/colors'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const updatedColor = this.state.colors.concat([data]);
        console.log(updatedColor)
        this.setState({
          colors: updatedColor
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleColor(data) {
    this.setState({
      rgb: `${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`,
      name: data.name.value,
      hex: data.hex.value
    })
    this.createNewColor(this.state)
    console.log(this.state)
  }

  renderColor(color){
    console.log('========>',color)
    return color.map((el) => {
      return (
        <ResultColor color={el} key={el.id} />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <ColorPicker handleColor={this.handleColor.bind(this)} />
          {this.renderColor(this.state.colors)}
        </div>
      </div>
    );
  }
}

export default App;
