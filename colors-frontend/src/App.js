import React, { Component } from 'react';
import './App.css';
import Colors from './components/Colors';
import AddColor from './components/AddColor';

class App extends Component {
  constructor(){
    super();
    this.state= {
      colors: [],
      hex: '',
      rgb: '',
      name: '',
      id: '',
      modal: false
    }
  }

  componentDidMount(){
    const url = 'http://localhost:3000/colors';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          colors: data
        })
      })
      .catch(error => console.log(error));
  }

  fetchColorFromAPI(color){
    var colorHEX = color.hex.replace('#','');
    const url = `http://thecolorapi.com/id?hex=${colorHEX}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          hex: data.hex.value,
          rgb: data.rgb.value,
          name: data.name.value
        }, () => {
          let addColor = {
            name: this.state.name,
            hex: this.state.hex,
            rgb: this.state.rgb
          };
          (this.state.modal) ?
          this.createNewColor(addColor) : 
          addColor['id'] = color.id;
          this.updateColor(addColor);
        })
      })
      .catch(error => console.log(error))
  }

  createNewColor(color){
    const url = 'http://localhost:3000/colors';
    fetch(url,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
    .then(response => response.json())
    .then(data => {
      const updatedColors = this.state.colors.concat([data]);
      this.setState({
        colors: updatedColors,
        modal: false
      })
    })
    .catch(error => console.log(error));
  }

  updateColor(color){
    console.log(color);
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
        const updateColors =this.state.colors.map(el => {
          return el.id === data.id ? data : el
        })
        this.setState({
          colors: updateColors
        })
      })
      .catch(error => console.log(error))
  }

  deleteColor(id){ 
    const url = `http://localhost:3000/colors/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      const updateColors = this.state.colors.filter( color => color.id !== id)
      this.setState({
        colors: updateColors
      })
      // console.log(data);
    })
    .catch(error => console.log(error));
  }

  renderColors(colors){
    return colors.map((color) => {
      return <Colors key={color.id} 
                    color={color}
                    updateColor={this.fetchColorFromAPI.bind(this)}
                    deleteColor={this.deleteColor.bind(this)}/>

    })
  }

  toggleModal(){
    console.log('toggle modal');
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="app">
      <AddColor createNewColor={this.fetchColorFromAPI.bind(this)}
                updateColor={this.updateColor.bind(this)}
                toggleModal={this.toggleModal.bind(this)}/>
              <div className="colors">
          {this.renderColors(this.state.colors)}
              </div>
      </div>
    );
  }
}

export default App;
