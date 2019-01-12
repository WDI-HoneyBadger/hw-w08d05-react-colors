import React from 'react';

const ColorPalette = (props) => {
    return(
        <div className="color-palette" onClick={() => props.setCurrentColor(props.color)}>
            <div style={{backgroundColor: `${props.color.rgb}` , textAlign: 'right' , padding: '5px'}}
            onClick={() => props.deleteColor(props.color.id)}>X</div>
            <div className="color-in-palette" style={ {backgroundColor: `${props.color.rgb}`} }>
            </div>
            <p>{props.color.name}</p>
            <p>RGB: {props.color.rgb}</p>
            <p>HEX: {props.color.hex}</p>
        </div>
    )
}

export default ColorPalette;