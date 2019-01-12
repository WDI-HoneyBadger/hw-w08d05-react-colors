import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Color from './components/Color';
import NewColor from './components/NewColor';
class App extends Component {
  constructor(){
    super();
    this.state ={
      colors : [],
      activeColor : null
    }
  }

  componentDidMount(){
    console.log('fetching data')
    fetch('http://localhost:3000/colors')
    .then(response => response.json()
    .then(data => {
      console.log(data)
      this.setState({
        colors : data
      })
    }))
    .catch(error =>{console.log(error)})
    
  }
  
  renderColors(allColors){
    return allColors.map((color) => {
      return(
        <Color key={color.id}
        color={color}
        setCurrentColor = {this.setCurrentColor.bind(this)}
        />
        
      )
    })
  }

  setCurrentColor(color){
    console.log('setting color');
    console.log(color);
    this.setState({
      activeColor: color
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
         activeShow: data
       })
     })
     .catch(error => {
       console.log(error);
     })
  }
  render() {
   
    return (
      <div className="App">
      <h1>Colors Palette</h1>
        <div className ='selectedColor'>
        <NewColor/>
        </div>
        <br></br>
          <div className='colorsPalette'>
          {this.renderColors(this.state.colors)}
          </div>

          
      </div>
    );
  }
}

export default App;
      
