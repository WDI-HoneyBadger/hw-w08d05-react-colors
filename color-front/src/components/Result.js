import React from 'react';

const Result = (props) => {
  return (
    <div>
      <div>
        <img src={props.color.image} alt=""/>
        <h2>{props.color.name}</h2>
        <p>{props.color.hex}</p>
      </div>
      <div>
        <div>
          <button onClick={() => {props.saveColor(props.color)}}>Save Color</button>
        </div>
      </div>
    </div>
  )
}

export default Result;