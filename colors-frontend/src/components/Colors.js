import React , {Component} from 'react';

class Colors extends Component {
    constructor(props){
        super(props);
        this.state = {
            hex: this.props.color.hex,
            rgb: this.props.color.rgb,
            name: this.props.color.name,
            id: this.props.color.id,
        }
    }

    handelChange(event){
        const v = event.target.value;
        console.log(v);
        this.setState({
            hex: v
        })
    }

    handelSubmit(event){
        event.preventDefault();
        this.props.updateColor(this.state);
    }

    // handelChange(event){

    // }

    render(){
        return (
            <div className="eachColor">
                <form onSubmit={this.handelSubmit.bind(this)}>
                {/* <div style={{backgroundColor: this.state.hex, width: '100px', height:'80px', margin: '10px auto', padding: '2px'}}>
                </div> */}
                    <input type="color"
                           onChange={this.handelChange.bind(this)}
                           value={this.state.hex}/>
                <p>{this.props.color.name}</p>
                <p>{this.props.color.rgb}</p>
                <p>{this.props.color.hex}</p>
                <button>Update Color</button>
                </form>
                <button onClick={()=>this.props.deleteColor(this.props.color.id)}>Delete Color</button>
            </div>
        )
    }
}

export default Colors;