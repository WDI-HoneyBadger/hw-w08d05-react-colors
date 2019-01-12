import React, { Component } from 'react';

class ColorTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            cancel: props.editMode,
            cancelCheck: false
        }
    }

    componentDidMount(){
        this.setState({cancel: false})
    }
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

    toggleEditAndCancel() {
        if (!this.props.editMode) {
            this.props.toggleEditMode();
            this.setState({ cancel: !this.state.cancel })
            this.props.setEditColorId(this.props.color.id)
        }
        else if (this.state.cancel) {
            console.log("IN ELSE IF")
            this.props.toggleEditMode();
            this.setState({ 
                cancel: false,
                cancelCheck: false
             })
        }
    }

    removeCancel(){
        this.setState({cancel: false});
    }

    render() {
        return (
            <div style={this.tileStyle()} onClick={() => {
                this.props.changeActiveColor(this.props.color);
                this.toggleEditAndCancel();
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
                {(this.state.cancel) ? this.renderHoverCancel() : ''}
                {console.log(this.state.cancel)}

            </div>
        )
    }
}

export default ColorTile;