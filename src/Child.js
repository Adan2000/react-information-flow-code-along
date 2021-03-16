
import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor)}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
  //now we use this.props.color to use that initial state color
  //that the parent claimed

  //then we add in getRandomColor to our onClick 
  //so now it has access the parent ChangeColor -> childrenColor: NewChildColor
}
export default Child
//now with that function that we passed in we want to pass
//it into a event handler so we do a 'onClick' event handler
//and PASS IN THAT PROP FUNCTION, 
//the event handler LISTENS FOR A CLICK 
//ON THAT DIV/CHILD (NO BUTTON NEEDED)
//so when WE click ON DIV/CHILDREN, that event 
//calls the handleColorChange



//NOW WE WANT TO CHANGE THE BACKGROUND COLOR AS WELL
//data CAN ONLY GO UP AND DOWN CHILD / PARENT 


