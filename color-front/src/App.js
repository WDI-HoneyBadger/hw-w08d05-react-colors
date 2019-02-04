import React, { Component } from 'react';
import './App.css';
import Forms from './components/Forms';
import Color from './components/Color';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showColors: [],
      implmantionColors: null,
      modal: false,
      searchColors: false
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
       console.log('DATA')
       console.log(data);
       const updatedColors = this.state.showColors.concat([data]);
       console.log(updatedColors)
       this.setState({
         showColors: updatedColors,
         implmantionColors: data,
         modal: false
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

      const updatedColors = this.state.showColors.map(el => {
        return el.id === data.id ? data : el
      })
      console.log('current state: ', this.state.showColors);
      console.log('new state: ', updatedColors)

      this.setState({
        showColors: updatedColors,
        implmantionColors: color,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteColor(id) {
    const url = `http://localhost:3000/colors/${id}`;
    fetch(url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        const updatedColors = this.state.showColors.filter( color => color.id !== id)
        this.setState({
          showColors: updatedColors,
          implmantionColors: null
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmit(color) {
    if(this.state.implmantionColors) {
      this.updateColor(color)
    } else {
      this.createNewColor(color)
    }
  }

  renderTiles(allColors) {

    return allColors.map((color) => {
      return (
        <Tile key={color.id}
          color={color}
          setCurrentColor={this.setCurrentColor.bind(this)}/>
      )
    })
  }

  setCurrentColor(color) {
    console.log('setting color');
    console.log(color);
    this.setState({
      implmantionColors: color
    })
   
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  toggleSearch(){
    this.setState({
      searchColors: !this.state.searchColors
    })
  }

  renderContent(){
    if(this.state.searchColors){
      return <Search toggleSearch={this.toggleSearch.bind(this)}
                     saveColor={this.createNewColor.bind(this)}/>
    } else if (this.state.implmantionColors){
      return (
        <Color 
         setCurrentColor={this.setCurrentColor.bind(this)} 
         implmantionColors={this.state.implmantionColors}
         deleteColor={this.deleteColor.bind(this)}
         toggleModal={this.toggleModal.bind(this)}
       />
      )
    } else {
      return (
        <div className="page-wrap">
        <section>
          <div className="colors">
            <div onClick={this.toggleSearch.bind(this)}>
              <img src="https://i.imgur.com/WX7bym4.png" alt=""/>
            </div>
            <div onClick={this.toggleModal.bind(this)}>+</div>
          </div>
          {this.renderTiles(this.state.colors)}
        </section>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <header className="title">My Colors</header>
        {this.renderContent()}
        {this.state.modal ? 
          <ColorForm 
            handleSubmit={this.handleSubmit.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            implmantionColors={this.state.implmantionColors}
            /> : ''}
      </div>
    );
  }
}

export default App;