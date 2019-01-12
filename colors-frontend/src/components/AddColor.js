import React, {Component} from 'react';

class AddColor extends Component {
    constructor(){
        super();
        this.state = {
            hex: '',
            rgb: '',
            name: ''
        }
    }
    
      updateColor(color, value){
        const newColors = this.state
        newColors[color] = value
        this.setState(newColors)
      }

    updateRed(event){
        const newRed = event.target.value;
        this.setState({red: newRed});
        this.props.handelColor(this.state.red,this.state.green,this.state.blue);
    }

    updateGreen(event){
        const newGreen = event.target.value;
        this.setState({green: newGreen});
        this.props.handelColor(this.state.red,this.state.green,this.state.blue);
    }

    updateBlue(event){
        const newBlue = event.target.value;
        this.setState({blue: newBlue});
        this.props.handelColor(this.state.red,this.state.green,this.state.blue);
    }

    getInput(event){
        const v = event.target.value;
        console.log(v);
        this.setState({
            hex: v
        })
    }

    handelSubmit(event){
        event.preventDefault();
        this.props.toggleModal();
        this.props.createNewColor(this.state);
    }

    render(){
        return(
            <div className="chooseColor">
                <form onSubmit={this.handelSubmit.bind(this)} >
                <div>
                <input type="color" className="inputColor"
                        onChange={this.getInput.bind(this)}/>
                </div>
                <button>Save</button>
                </form>
            </div>
        )
    }
}

export default AddColor;
