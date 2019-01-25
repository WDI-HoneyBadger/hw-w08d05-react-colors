import React from 'react';

const ColorInput = (props) => {
  return(
    <div>
      <label>{props.color}</label>
      <input type="range" value={props.value} name={props.color} min="0" max="255" onChange={props.updateColor} />
      <input type="number" value={props.value} name={props.color} min="0" max="255" onChange={props.updateColor} />
    </div>
  )
}

export default ColorInput;