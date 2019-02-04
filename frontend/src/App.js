import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Color from './components/Color';

const API_URL = 'http://localhost:3000'

class App extends Component {
  constructor(){
    super();
    this.state = {
      colors: [],
      pickerColor: this.randomColor()
    }
  }

  randomColor(){
    return {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    }
  }

  fetchColors(){
    const url = API_URL + '/color';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({colors: data}))
      .catch(console.log)
  }

  componentDidMount(){
    this.fetchColors();
  }

  updatePickerColor(event){
    const newPickerColor = this.state.pickerColor;
    newPickerColor[event.target.name] = event.target.value;
    this.setState({pickerColor: newPickerColor})
  }

  changePickerColor(color){
    this.setState({pickerColor: color})
  }

  fetchColorData(event){
    event.preventDefault()
    const color = this.state.pickerColor
    const url = `http://thecolorapi.com/id?rgb=rgb(${this.state.pickerColor.red},${this.state.pickerColor.green},${this.state.pickerColor.blue})`;
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        const parsedData = this.parseData(data);
        if(this.state.pickerColor.id){
          this.updateColor(parsedData, this.state.pickerColor.id)
        }else{
          this.createColor(parsedData);
        }
      })
      .catch(console.log)
  }

  parseData(data){
    return {
      hex: data.hex.value,
      name: data.name.value,
      red: data.rgb.r,
      green: data.rgb.g,
      blue: data.rgb.b
    }
  }

  createColor(color){
    const url = API_URL + `/color`;
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
    .then(response => response.json())
    .then(data => {
      const newColors = this.state.colors.concat(data);
      this.setState({colors: newColors})
    })
  }

  updateColor(color, id){
    const url = API_URL + `/color/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        const newColors = this.state.colors.map( el => {
          return el.id === data.id ? data : el;
        } )
        this.setState({
          colors: newColors,
          pickerColor: this.randomColor()
        })
      })
      .catch(console.log)
  }

  deleteColor(color){
    const url = API_URL + `/color/${color.id}`;
    fetch(url, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        const newColors = this.state.colors.filter( el => el.id !== color.id );
        this.setState({colors: newColors});
      })
      .catch(console.log)
  }

  randomizePicker(){
    console.log("RANDOMIZE")
    this.setState({ pickerColor: this.randomColor() })
  }

  renderColors(){
    return this.state.colors.map( color => {
      return( <Color color={color} key={color.id} 
        deleteColor={() => {this.deleteColor(color)}} 
        changePickerColor={()=>{this.changePickerColor(color)}}
        isPicked={ this.state.pickerColor.id === color.id }
        randomizePicker={this.randomizePicker.bind(this)}/> )
    } )
  }

  render() {
    return (
      <div className="App">
        <ColorPicker handleSubmit={this.fetchColorData.bind(this)} updateColor={this.updatePickerColor.bind(this)} color={this.state.pickerColor} />
        <div className="colors">
          {this.renderColors()}
        </div>
      </div>
    );
  }
}

export default App;
