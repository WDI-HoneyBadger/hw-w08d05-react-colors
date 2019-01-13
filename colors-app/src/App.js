import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import Colors from './Components/Colors';


class App extends Component {

  constructor() {
    super()
    this.state = {
      rgb: '',
      name: '',
      hex: '',
      colors: []
    }
  }

  componentDidMount(){
    const url = 'http://localhost:3000/colors';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        colors:data
      })
  
      console.log("***", this.state.colors)
    })
    .catch(error => console.log(error))
  }
  
  createNewColor(color){
    const url = 'http://localhost:3000/colors';
    fetch(url,{
      method: 'POST',
      headers : {
        "Content-type" : 'application/json'
      },
      body: JSON.stringify(color)
    })
    .then(response => response.json())
    .then(data => {
      console.log('DATA')
      console.log(data);
      const updatedColors = this.state.colors.concat([data]);
      console.log(updatedColors)
      this.setState({
        colors: updatedColors,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  renderColor(allColors){

    return allColors.map((elem)=>{

      return <Colors color={elem} key={elem.id}/>

    })

  }


  handleColor(data) {
    this.setState({
      rgb: `${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`,
      name: data.name.value,
      hex: data.hex.value
    })
    this.createNewColor(this.state)
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div>
          <ColorPicker handleColor={this.handleColor.bind(this)} />
          {/* <Colors/> */}

          {this.renderColor(this.state.colors)}
        </div>

        <div>
          {/* <ResultColor /> */}
        </div>
      </div>
    );
  }
}

export default App;