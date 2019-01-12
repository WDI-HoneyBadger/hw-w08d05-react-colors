import React from 'react';


const Color = (props)=>{
    return(
        // <div className = 'color' onClick = {() =>{props.setCurrentColor(props.colors)}}>
        <div>

            <div className = 'color'style={{backgroundColor:props.color.rgb}}>
            <h3>{props.color.name}</h3>
            </div>
                <p>rgb: {props.color.rgb}</p>
                <p>hex: {props.color.hex}</p>
        </div>

    )
}
export default Color ;