import React, { Component } from 'react';
import './App.css';
import ColorTile from './components/ColorTile';
// import ColorDisplay from './components/ColorDisplay';
import ColorInput from './components/ColorInput';


class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      activeColor: {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
      },
      editMode: false,
      editColorId: ''
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
    this.colorFetch();
  }

  renderTiles(colors) {
    return colors.map((element, index) => {
      // console.log(colors)
      return (
        <div className="tile" key={index} >
          <ColorTile color={element} id={element.id}
            changeActiveColor={this.changeActiveColor.bind(this)}
            deleteColor={this.deleteColor.bind(this)} 
            toggleEditMode={this.toggleEditMode.bind(this)}
            editMode={this.state.editMode}
            setEditColorId={this.setEditColorId.bind(this)}
            activeColor={this.state.activeColor}
            colorFetch={this.colorFetch.bind(this)}/>
        </div>
      )
    })
  }

  renderColorDisplay() {
    return (
      <div className="displayContainer">

        <div style={this.colorDisplayStyle()}></div>
        {/* {this.renderColorInputs()} */}
        <br />
        <ColorInput color='red' value={this.state.activeColor.red}
          modifyColor={this.modifyColor.bind(this)} />
        <ColorInput color='green' value={this.state.activeColor.green}
          modifyColor={this.modifyColor.bind(this)} />
        <ColorInput color='blue' value={this.state.activeColor.blue}
          modifyColor={this.modifyColor.bind(this)} />
        <h4>Hex Value: {this.state.activeColor.hex}</h4>
        <h4>Color Name: {this.state.activeColor.name}</h4>
        
      </div>
    )
  }

  colorDisplayStyle() {
    return {
      margin: '0 auto',
      width: '400px',
      height: '300px',
      border: 'solid black 1px',
      backgroundColor: `rgb(${this.state.activeColor.red}, ${this.state.activeColor.green}, ${this.state.activeColor.blue})`
    }
  }

  colorFetch() {
    console.log(this.state.activeColor)
    const url = `http://www.thecolorapi.com/id?rgb=${this.state.activeColor.red},${this.state.activeColor.green},${this.state.activeColor.blue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const tempColor = this.state.activeColor;
        tempColor.name = data.name.value;
        tempColor.hex = data.hex.value;
        this.setState({activeColor: tempColor});
      })
  }
  specificColorFetch(red, green, blue){
    const url = `http://www.thecolorapi.com/id?rgb=${red},${green},${blue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const tempColor = this.state.activeColor;
        tempColor.name = data.name.value;
        tempColor.hex = data.hex.value;
        this.setState({activeColor: tempColor});
      })
  }

  modifyColor(value, color) {
    const tempColor = this.state.activeColor;
    // console.log(tempColor);
    tempColor[color] = value;
    this.setState({ activeColor: tempColor }, this.colorFetch);

    // this.state.activeColor[color]({activeColor: {[color]: value}})
  }

  changeActiveColor(color) {
    // this.setState({activeColor[red]:  })
    // this.tileElement.current.removeCancel()
    this.setState({ activeColor: color })
  }

  setEditColorId(id){
    this.setState({editColorId: id});
  }

  toggleEditMode(){
    this.setState({editMode: !this.state.editMode})
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
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        this.setState({
          colors: this.state.colors.concat(data),
          activeColor: {
            red: red,
            green: green,
            blue: blue
          }
        }, this.specificColorFetch(red, green, blue))
      })
      .catch(error => console.log(error))
  }

  updateColor(color) {
    const url = `http://localhost:3000/colors/${this.state.editColorId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        const updatedArray = this.state.colors.map((element) => {
          return element.id === data.id ? data : element;
        })
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        this.setState({
          colors: updatedArray,
          editMode: false,
          editColorId: '',
          activeColor: {
            red: red,
            green: green,
            blue: blue
          }
        }, () => {
          this.specificColorFetch(red, green, blue);
          // this.tileElement.current.removeCancel();
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
        
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        this.setState({
          activeColor: {
            red: red,
            green: green,
            blue: blue
          },
          colors: filteredArray
        }, this.specificColorFetch(red, green, blue))
        
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        <h1>Colors!</h1>

        {/* <ColorDisplay activeColor={this.state.activeColor}
          createColor={this.createColor.bind(this)} /> */}

        {this.renderColorDisplay()}
        {(this.state.editMode) ? <button className="actionButton" onClick={() => this.updateColor(this.state.activeColor)}>Update</button> 
        : <button className="actionButton" onClick={() => this.createColor(this.state.activeColor)}>Save Color</button>}

        <div className="tileContainer">
          {this.renderTiles(this.state.colors)}
        </div>
      </div>
    );
  }
}

export default App;
