
import React from 'react';

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <div>
        <h2>{props.show.name}</h2>
        <h4>{props.show.rating} / 10 ✭</h4>
      </div>
      <div>
        <img src={props.show.image} alt=""/>
        <div className="result-details">
          <p>{props.show.description}</p>
          <button onClick={() => {props.saveShow(props.show)}}>Save Show</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;