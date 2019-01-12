import React from 'react';

const Tile = (props) => {

  return(
    <div className="tile" 
    onClick={() => {props.setCurrentColor(props.color)}}
    >
      <h2>{props.color.name}</h2>
      <div className="color-box" style={ {backgroundColor: `${props.color.hex_value}`}}> </div>
    </div>
  )
}

export default Tile;