import React from "react";

const Color = props => {
  return (
<div>
      <div
        className="back"
        onClick={() => {
          props.setCurrentColor(null);
        }}
      >
        Back
      </div>

          <div>
            <h2>{props.activeColor.name}</h2>
            <h4>{props.activeColor.hex_value} </h4>
              <p>{props.activeColor.rgb_value}</p>

                <button onClick={() => {props.toggleModal()}}>Edit</button>
                <button onClick={() => {props.deleteColor(props.activeColor.id)}}>Delete</button>
              </div>
   </div>
  );
};

export default Color;