import React from 'react';
import ColorInput from './ColorInput';

const ColorPicker = (props) => {
  const color = props.color;
  return (
    <div>
      <div className="swatch" style={{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}}></div>
      <form onSubmit={props.handleSubmit}>
        <ColorInput color='red' updateColor={props.updateColor} value={color.red} />
        <ColorInput color='green' updateColor={props.updateColor} value={color.green} />
        <ColorInput color='blue' updateColor={props.updateColor} value={color.blue} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ColorPicker;