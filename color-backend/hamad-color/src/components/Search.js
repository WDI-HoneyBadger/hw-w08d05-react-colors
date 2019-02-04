import React, { Component } from 'react';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      results: []
    }
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      results: []
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const url = `http://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data from api: ', data)
        this.handleData(data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleData(data) {
    const parsedData = data.map( result => {
      return{
        name: result.show.name,
        description: result.show.summary.replace(/<\/?[^>]+(>|$)/g, ""),
        image: result.show.image ? result.show.image.original : '',
        rating: result.show.rating ? result.show.rating.average : 0
      }
    })

    console.log(parsedData);

    this.setState({
      results: parsedData
    })
  }

  renderResults() {
    return this.state.results.map((result, index) => {
      return <SearchResult key={index} show={result} saveShow={this.props.saveShow}/>
    })
  }

  render() {
    return(
      <div>
        <div className="back" onClick={this.props.toggleSearch}>Back</div>
        <div className="search-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)}/>
            <button><img src="https://i.imgur.com/WX7bym4.png" alt=""/></button>
          </form>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

export default Search;