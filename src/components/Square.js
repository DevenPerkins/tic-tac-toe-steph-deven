import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    alert("hey it works!")
  }



  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
