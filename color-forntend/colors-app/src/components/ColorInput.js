import React from 'react';

const ColorInput = (props) => {
    return(
        <div className="input-container">
            <label className="flex-one">{props.color}</label>
            <input type="range"
                value={props.value}
                max='255'
                min='0'
                className="flex-two"
                onChange={ (event) => {
                    props.updateColor(props.color, event.target.value)
                }} />
            <input type="number"
                value={props.value}
                max='255'
                min='0'
                className="flex-three"
                onChange={(event) => {
                props.updateColor(props.color, event.target.value)
                }}/>
        </div>
    )
}

export default ColorInput;