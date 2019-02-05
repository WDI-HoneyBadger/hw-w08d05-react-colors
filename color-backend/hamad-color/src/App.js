import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile';
import ShowForm from './components/ShowForm';
import Show from './components/Show';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shows: [],
      activeShow: null,
      modal: false,
      search: false
    }
  } 

  componentDidMount(){
    // fetch all the data from our API
    // update our state "shows" with that data
    console.log('fetching data');
    fetch('http://localhost:3001/shows')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          shows: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  createNewShow(show) {
    /* 
      posts data to the database, the database
      sends that same data back.
      add that data to the 'shows' state
    */
   const url = 'http://localhost:3001/shows'
   fetch(url, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(show)
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
         modal: false,
         search: false
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  updateShow(show) {
    const url = `http://localhost:3001/shows/${show.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(show)
    })
    .then(response => response.json())
    .then(data => {

      const updatedShows = this.state.shows.map(el => {
        return el.id === data.id ? data : el
      })
      console.log('current state: ', this.state.shows);
      console.log('new state: ', updatedShows)

      this.setState({
        shows: updatedShows,
        activeShow: show,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteShow(id) {
    const url = `http://localhost:3001/shows/${id}`;
    fetch(url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        const updatedShows = this.state.shows.filter( show => show.id !== id)
        this.setState({
          shows: updatedShows,
          activeShow: null
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmit(show) {
    if(this.state.activeShow) {
      this.updateShow(show)
    } else {
      this.createNewShow(show)
    }
  }

  renderTiles(allShows) {
    // map through the state "shows" 
    // and make a tile for each TV show
    return allShows.map((show) => {
      return (
        <Tile key={show.id}
          show={show}
          // name={show.name} 
          // image={show.image}
          setCurrentShow={this.setCurrentShow.bind(this)}/>
      )
    })
  }

  setCurrentShow(show) {
    console.log('setting show');
    console.log(show);
    this.setState({
      activeShow: show
    })
    // when given a show, set state 'activeShow' to that show
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  toggleSearch(){
    this.setState({
      search: !this.state.search
    })
  }

  renderContent(){
    if(this.state.search){
      return <Search toggleSearch={this.toggleSearch.bind(this)} saveShow={this.createNewShow.bind(this)}/>
    } else if (this.state.activeShow){
      return (
        <Show 
         setCurrentShow={this.setCurrentShow.bind(this)} 
         activeShow={this.state.activeShow}
         deleteShow={this.deleteShow.bind(this)}
         toggleModal={this.toggleModal.bind(this)}
       />
      )
    } else {
      return (
        <div className="shows">
          <div className="action-buttons">
            <div onClick={this.toggleSearch.bind(this)}>
              <img src="https://i.imgur.com/WX7bym4.png" alt=""/>
            </div>
            <div onClick={this.toggleModal.bind(this)}>+</div>
          </div>
          {this.renderTiles(this.state.shows)}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <header>My Shows</header>
        {this.renderContent()}
        {this.state.modal ? 
          <ShowForm 
            handleSubmit={this.handleSubmit.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            activeShow={this.state.activeShow}
            /> : ''}
      </div>
    );
  }
}

export default App;