import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shows: [],
      activeShow: null,
      modal: false,
    }
  }

  componentDidMount(){
    // fetch all the data from our API
    // update our state "shows" with that data
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
       const updatedShows = this.state.shows.concat([data]);
       console.log(updatedShows)
       this.setState({
         shows: updatedShows,
         activeShow: data,
         modal: false
       })
     })
     .catch(error => {
       console.log(error);
     })
  }




  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
