import React, { Component } from 'react';

class ColorTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    // componentDidMount(){
    //     this.setState({cancel: false})
    // }

    tileStyle() {
        return {
            borderRadius: '10px',
            width: '150px',
            height: '150px',
            backgroundColor: `rgb(${this.props.color.red}, ${this.props.color.green}, ${this.props.color.blue})`
        }
    }

    renderHoverInfo() {
        return (
            <div className="hover">
                <div className="delete" onClick={(e) => {
                    e.stopPropagation();
                    this.props.deleteColor(this.props.color.id);
                }}>
                    Delete</div>

                <div className="hoverInfo">
                    <h4>{this.props.color.name}</h4>
                    <h5>{this.props.color.hex}</h5>
                </div>
            </div>
        )
    }

    renderHoverCancel() {
        return (
            <div className="hover">
                <div className="cancel">
                    <h4>Cancel</h4>
                </div>

            </div>
        )
    }

    handleClickToEdit() {
        if (!this.props.editMode) {
            this.props.changeActiveColor(this.props.color);
            this.props.toggleEditMode();
            this.props.setEditColorId(this.props.color.id)
        }
        else if(this.props.activeColor !== this.props.color){
            this.props.changeActiveColor(this.props.color);
            this.props.setEditColorId(this.props.color.id)
        }
        else{
            console.log("IN ELSE IF")
            this.props.toggleEditMode();
            this.props.setEditColorId('')
            this.props.changeActiveColor({
                red: Math.floor(Math.random() * 255),
                green: Math.floor(Math.random() * 255),
                blue: Math.floor(Math.random() * 255)
            })
            this.props.colorFetch();
        }
    }

    removeCancel(){
        this.setState({cancel: false});
    }

    render() {
        return (
            <div style={this.tileStyle()} onClick={() => {
                this.handleClickToEdit();
            }}
                onMouseEnter={() => {
                    this.setState({ hover: true })
                    if (this.state.cancel) {
                        this.setState({ cancelCheck: true })
                    }
                }}

                onMouseLeave={() => {
                    this.setState({ hover: false })
                    if (this.state.cancelCheck) {
                        this.setState({
                            cancel: true,
                            cancelCheck: false
                        })
                    }
                }}
            >

                {(this.state.hover) ? this.renderHoverInfo() : ''}
                {(this.props.color === this.props.activeColor) ? this.renderHoverCancel() : ''}

            </div>
        )
    }
}

export default ColorTile;