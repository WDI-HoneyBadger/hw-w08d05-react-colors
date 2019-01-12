import React, { Component } from 'react';
import './App.css';
import ColorTile from './components/ColorTile';
import ColorDisplay from './components/ColorDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      activeColor: {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
        // red: '100',
        // green: '100',
        // blue: '100'
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/colors')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ colors: data });
      })
      .catch(error => console.log(error))
  }

  renderTiles(colors) {
    return colors.map((element, index) => {
      // console.log(colors)
      return (
        <div className="tile" key={index} >
          <ColorTile color={element} id={element.id}
            changeActiveColor={this.changeActiveColor.bind(this)} 
            deleteColor={this.deleteColor.bind(this)}/>
        </div>
      )
    })
  }

  changeActiveColor(color) {
    console.log(this.state.activeColor)
    this.setState({ activeColor: color })
  }

  createColor(color) {
    const url = 'http://localhost:3000/colors';
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          colors: this.state.colors.concat(data),
          activeColor: color
        })
      })
      .catch(error => console.log(error))
  }

  deleteColor(id) {
    const url = `http://localhost:3000/colors/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(() => {
        const filteredArray = this.state.colors.filter((color) => color.id !== id)
        this.setState({
          activeColor: {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
          },
          colors: filteredArray
        });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        <h1>Colors!</h1>

        <ColorDisplay activeColor={this.state.activeColor}
          createColor={this.createColor.bind(this)} />
        <div className="tileContainer">
          {this.renderTiles(this.state.colors)}
        </div>
      </div>
    );
  }
}

export default App;
