import React, { Component } from 'react';
import Inputs from './component/Inputs';
import Colors from './component/Colors'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      colors:[],
      modal: false,
      activecolor: null,
      name:'',
      rgb: '',
      hex:'',
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
deleteColor(id) {
  const url = `http://localhost:3000/colors/${id}`;
  fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      const updatedColors = this.state.colors.filter( color => color.id !== id)
      this.setState({
        colors: updatedColors,
      })
    })
    .catch(error => {
      console.log(error);
    })
}


handleColor(data) {
  this.setState({
    rgb: `${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`,
    name: data.name.value,
    hex: data.hex.value
  })
  this.createNewColor(this.state);
  console.log(this.state)
}

renderColors(allColors){
return allColors.map(color => {
  return(
    <Colors key={color.id} color={color} deleteColor ={this.deleteColor.bind(this)} />
    // colorInfo ={this.colorInfo.bind(this)}
  )
})
}

// colorInfo(color){
//   this.setState({
//     name:color.name,
//     rgb: color.rgb,
//     hex: color.hex
//   })
// }

// renderInfo(){
//   return(
//     <div>
//     <p>{this.state.name}</p>
//     <p>{this.state.rgb}</p>
//     <p>{this.state.hex}</p>
//     </div>
//   )
// }
  render() {
    return (
      <div className="App">
      <Inputs handleColor={this.handleColor.bind(this)}
      createNewColor = {this.createNewColor.bind(this)}
      />
      
      <div>
         {this.renderColors(this.state.colors)}
         {/* {this.renderInfo()} */}

      </div>
      </div>
    )
  }
}

export default App;
