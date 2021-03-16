import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
  
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }
//we set the initial state to getRandomColor which is a 
//component that generates random colors.

//NOW the initial color of children lives in the Parent 
//like this.. (childrenColor: '#FFF')

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }
  //we also do a setState that set it to a randomColor AGAIN
  
  //we then update the changeColor, where it update childrenColor
  //and sets that to newChildColor

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
//we pass a state changing function as a prop to both child components
//as handleColorChange={this.changeColor}, now child will have a prop
//that is handleColorChange, SAME FUNCTION AS PARENT 'changeColor'

//SINCE the data that represents the children initial color
//lives in the parent, we can PASS THAT ON AS PROPS TO THE CHILDS
//like this... color={this.state.childrenColor}
//now we can use that in the children 
}

export default Parent;

