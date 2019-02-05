import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile" onClick={() => {props.setCurrentShow(props.show)}}>
      <img src={props.show.hex} alt=""/>
      <h2>{props.show.name}</h2>
    </div>
  )
}

export default Tile;