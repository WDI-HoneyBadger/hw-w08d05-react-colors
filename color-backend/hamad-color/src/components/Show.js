import React from "react";

const Show = props => {
  return (
    <div>
      <div
        className="back"
        onClick={() => {
          props.setCurrentShow(null);
        }}
      >
        back
      </div>
      <div className="container">
        <div className="show">
          <div>
            <h2>{props.activeShow.name}</h2>
            <h4>{props.activeShow.rating} / 10 ✭</h4>
          </div>
          <div>
            <img src={props.activeShow.image} alt="" />
            <div className="show-details">
              <p>{props.activeShow.description}</p>
              <div className="show-buttons">
                <button onClick={() => {props.toggleModal()}}>Edit</button>
                <button onClick={() => {props.deleteShow(props.activeShow.id)}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;