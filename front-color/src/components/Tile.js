import React from 'react';

const Tile = (props) => {
  return(
    <div className="swatch" onClick={()=> {props.setCurrentColor(props.color)}}>
      <img src={props.color.image} alt=""/>
      <h2>{props.color.name}</h2>
      <p>{props.color.hex}</p>
      <p>{props.color.rgb}</p>
      <p>{props.color.contrast}</p>
    </div>
  )
}

export default Tile;