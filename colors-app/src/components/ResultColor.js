import React, { Component } from 'react';

class ResultColor extends Component {


    render() {
        return (
            <div className='result'>
                <div style={{ backgroundColor: `${this.props.color.hex}`, height: '200px', width: '200px' }}></div>
            </div>
        )
    }
}

export default ResultColor;