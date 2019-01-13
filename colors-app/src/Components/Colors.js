import React from 'react';

const resultsofColors = (props) =>{


    return(

        <div>

            <div className="colors" style={{backgroundColor:`${props.color.hex}`, height:"200px", width:"200px"}}></div>

        </div>

  
        
    )


}

export default resultsofColors;