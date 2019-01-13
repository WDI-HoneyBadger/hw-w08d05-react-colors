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
        back
      </div>
      <div className="container">
        {/* <div className="show"> */}
          <div>
            <img className="sample" src={props.activeColor.image} alt="" />
            <h2 className="name">{props.activeColor.name}</h2>
            <p className="label">{props.activeColor.hex}</p>
            <p className="label">{props.activeColor.rgb}</p>
            <p className="label">{props.activeColor.contrast}</p>
          </div>
          <div>
              <div className="delete-color">
                <button onClick={() => {props.toggleModal()}}>Edit</button>
                <button onClick={() => {props.deleteColor(props.activeColor.id)}}>Delete</button>
              </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Color;