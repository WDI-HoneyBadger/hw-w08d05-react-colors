import React, { Component } from 'react';
import Result from './Result';

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
    const url = `http://thecolorapi.com/id?hex=${this.state.searchTerm}`
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
        name: result.color.name,
        hex: result.color.hex,
        image: result.color.image ? result.show.image.named : '',
      }
    })

    console.log(parsedData);

    this.setState({
      results: parsedData
    })
  }

  renderResults() {
    return this.state.results.map((result, index) => {
      return <Result key={index} color={result} saveColor={this.props.saveColor}/>
    })
  }

  render() {
    return(
      <div>
        <div onClick={this.props.toggleSearch}>Back</div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
