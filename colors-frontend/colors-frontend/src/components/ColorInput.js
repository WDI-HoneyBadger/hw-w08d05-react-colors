import React from 'react';



const ColorInput = (props) => {
  return(
    <div>
      {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
      <label>{props.color}</label>
      <input type="range" 
             value={props.value}
             max='255'
             min='0'
             onChange={(event)=>{
               props.updateColor(props.color, event.target.value)
             }}/>
      <input type="number"
             value={props.value}
             max='255'
             min='0'
             onChange={(event) => {
               props.updateColor(props.color, event.target.value)
             }}/>
             {/* </form> */}
    </div>
  )
}

export default ColorInput;