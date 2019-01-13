import React from 'react';

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <div>
        <img src={props.color.image} alt=""/>
        <h2>{props.color.name}</h2>
        <p>{props.color.hex}</p>
        <p>{props.color.rgb}</p>
        <p>{props.color.contrast}</p>
      </div>
      <div>
        <div className="result-details">
          <button onClick={() => {props.saveColor(props.color)}}>Save Color</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;