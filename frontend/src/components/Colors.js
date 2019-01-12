import React from 'react';

const Colors = (props) => {
  return(
    <div >
    <div  className="colors" style={{ width: '200px',height: '200px', margin: '0 auto', display: 'flex', direction: 'colome' , border: '5px solid black'}} >
    <div style={{width: '100%', height: '100%' ,
           backgroundColor: `rgb(${props.red} ,${props.green} ,${props.blue} )`}} >
      </div>
    </div>
      
      <p>{props.name}</p>
    </div>
  )
}

export default Colors;