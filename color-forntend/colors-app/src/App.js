import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import ColorPalette from './components/ColorPalette';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newColor: '',
      colors: [],
      activeColor: null
    }
  }

  componentDidMount(){
    console.log('fetching data');
    fetch('http://localhost:3000/colors')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          colors: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  renderColors(allColors) {
    return allColors.map((color, index) => {
      return (
        <ColorPalette 
          key={index}
          color={color}
          setCurrentColor={this.setCurrentColor.bind(this)}
          deleteColor={this.deleteColor.bind(this)} />
      )
    })
  }

  setCurrentColor(color) {
    this.setState({
      activeColor: color
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
       const updatedColors = this.state.colors.concat([data]);
       console.log(updatedColors)
       this.setState({
         colors: updatedColors
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  deleteColor(id) {
    const url = `http://localhost:3000/colors/${id}`;
    fetch(url, {
      method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        const updatedColor = this.state.colors.filter( color => color.id !== id)
        this.setState({
          colors: updatedColor,
          activeColor: null
        })
      })
      .catch(error => {
        console.log(error)
      }) 
  }

  updatedColor(color) {
    const url = `http://localhost:3000/colors/${color.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        const updatedColor = this.state.color.map( el => {
          return el.id === data.id ? data : el
        })
        this.setState({
          colors: updatedColor,
          activeColor: color
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit(color) {
    if(this.state.activeColor !== null) {
      this.updatedColor(color)
    } else {
      this.createNewColor(color)
    }
  }

  toggleActiveColor() {
    this.setState({
      activeColor: null
    })
  }

  render() {
    return (
      <div className="app">
        <div>
          <h1>Color Palette</h1>
          <ColorPicker activeColor={this.state.activeColor} toggleActiveColor={this.toggleActiveColor.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
          <div className="color-palette-container">
            {this.renderColors(this.state.colors)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
