import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tiles';
import Color from './components/Color';
import ColorsForm from './components/ColorsForm';
import ColorPicker from './components/ColorPicker';

class App extends Component {
  constructor(){
    super();
    this.state = {
      colors: [],
      activeColor: null,
      modal: false,
      new:true
      // search: false
    }
  } 

  componentDidMount(){
    fetch('http://localhost:3000/colors')
    .then( response => response.json())
    .then(data => {
      console.log("here",data);
      this.setState({
        colors:data
      })
    })
    .catch(error => console.log(error))
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  deleteColor(id) {
    const url = `http://localhost:3000/colors/${id}`;
    fetch(url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        const updatedColors = this.state.colors.filter( color => color.id !== id)
        this.setState({
          colors: updatedColors,
          activeColor: null
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  updateColor(color) {
    const url = `http://localhost:3000/colors/${color.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
    .then(response => response.json())
    .then(data => {

      const updatedColors = this.state.colors.map(el => {
        return el.id === data.id ? data : el
      })
      console.log('current state: ', this.state.colors);
      console.log('new state: ', updatedColors)

      this.setState({
        colors: updatedColors,
        activeColor: color,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  createNewColor(color) {
    /* 
      posts data to the database, the database
      sends that same data back.
      add that data to the 'shows' state
    */
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
       console.log('DATA')
       console.log(data);
       const updatedColors = this.state.colors.concat([data]);
       console.log(updatedColors)
       this.setState({
         colors: updatedColors,
         activeColor: data,
         modal: false,
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  setCurrentColor(color) {
    console.log('setting color');
    console.log(color);
    this.setState({
      activeColor: color
    })
  }
  
  
  handleSubmit(color) {
    if(this.state.activeColor) {
      this.updateColor(color)
    } else {
      this.createNewColor(color)
    }
  }

  renderTiles(allcolors) {
    return allcolors.map((color) => {
      return (
        <Tile key={color.id}
          color={color}
          setCurrentColor={this.setCurrentColor.bind(this)}
          />
      )
    })
  }

  renderContent(){
    if (this.state.activeColor){
      return (
        <Color 
         setCurrentColor={this.setCurrentColor.bind(this)} 
         activeColor={this.state.activeColor}
         deleteColor={this.deleteColor.bind(this)}
         toggleModal={this.toggleModal.bind(this)}
       />
      )
    }
     else {
      return (
        <div className="shows">
          {/* <div className="action-buttons">
            <div onClick={this.toggleSearch.bind(this)}>
              <img src="https://i.imgur.com/WX7bym4.png" alt=""/>
            </div>
            <div onClick={this.toggleModal.bind(this)}>+</div>
          </div> */}
          
          {/* <div onClick={this.toggleModal.bind(this)}>+</div> */}

          {this.renderTiles(this.state.colors)}
        </div>
      )
    }
  }

  toggleNew(){
    this.setState({
      new: !this.state.new
    })
  }

  render() {
    return (
      <div className="App">

      {this.renderContent()}

      {this.state.modal ? 
          <ColorsForm 
            handleSubmit={this.handleSubmit.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            activeColor={this.state.activeColor}
            toggleNew={this.toggleNew.bind(this)} 
            /> : ''}

            <ColorPicker
            // toggleNew={this.toggleNew.bind(this)} 
            handleSubmit={this.handleSubmit.bind(this)} 
            saveColor={this.createNewColor.bind(this)}
            />
      </div>
    );
  }
}

export default App;
