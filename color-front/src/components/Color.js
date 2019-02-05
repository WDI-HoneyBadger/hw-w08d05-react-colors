import React from "react";

const Color = props => {
  return (
    <div>
      <div
        onClick={() => {
          props.setCurrentColor(null);
        }}
      >
        back
      </div>
      <div className="container">
        {/* <div className="show"> */}
          <div>
            <img  src={props.implmantionColors.image} alt="" />
            <h2> {props.implmantionColors.name}</h2>
            <p>{props.implmantionColors.hex}</p>
          </div>
          <div>
              <div>
                <button onClick={() => {props.toggleModal()}}>Edit</button>
                <button onClick={() => {props.deleteColor(props.implmantionColors.id)}}>Delete</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Color;