import React from 'react';

const Colors = (props) => {

    return(
        <div className = 'colors'>
            <div style={{
                backgroundColor: `${props.color.hex}`,
                height:'300px',
                width:'300px'
                }}>
            <button 
            onClick={() => {props.deleteShow(props.color.id)}}
            style={{backgroundColor : 'white'}}
            >
            
            X</button>
            </div>
        </div>
    )
}

export default Colors;