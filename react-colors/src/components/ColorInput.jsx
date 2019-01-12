import React from 'react';

const ColorInput = (props) => {
    return (
        <div className="ColorInput">
            <label> {props.color}

                <input id="theRange" type="range" min='0' max='255' value={props.value} onChange={(event) => {
                    props.updateColor(event.target.value, props.color);
                }} />

                <input id="theNumber" type="number" min='0' max='255' value={props.value} onChange={(event) => {
                    props.updateColor(event.target.value, props.color);
                }} />

            </label>
        </div>
    )
}

export default ColorInput;