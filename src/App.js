import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      history: [],
      currentPlayer: "p1"
    }
  }
  
  isWinX = () =>{
  const {squares , x} = this.state
  const winCombosX = [
    [squares[0] === "❌"  && squares[1] === "❌" && squares[2] === "❌" ],
    [squares[3] === "❌"  && squares[4] === "❌" && squares[5] === "❌" ],
    [squares[6] === "❌"  && squares[7] === "❌" && squares[8] === "❌" ],
    
    [squares[0] === "❌"  && squares[3] === "❌" && squares[6] === "❌" ],
    [squares[1] === "❌"  && squares[4] === "❌" && squares[7] === "❌" ],
    [squares[2] === "❌"  && squares[5] === "❌" && squares[8] === "❌" ],

    [squares[0] === "❌"  && squares[4] === "❌" && squares[8] === "❌" ],
    [squares[2] === "❌"  && squares[4] === "❌" && squares[6] === "❌" ],
    ]
  }

  isWinO = () => {
  const {squares , o } = this.state
  const winCombosO = [
    [squares[0] === "🅾️"  && squares[1] === "🅾️" && squares[2] === "🅾️" ],
    [squares[3] === "🅾️"  && squares[7] === "🅾️" && squares[8] === "🅾️" ],
    
    [squares[0] === "🅾️"  && squares[3] === "🅾️" && squares[6] === "🅾️" ],
    [squares[1] === "🅾️"  && squares[4] === "🅾️" && squares[7] === "🅾️" ],
    [squares[2] === "🅾️"  && squares[5] === "🅾️" && squares[8] === "🅾️" ],
  
    [squares[0] === "🅾️"  && squares[4] === "🅾️" && squares[8] === "🅾️" ],
    [squares[2] === "🅾️"  && squares[4] === "🅾️" && squares[6] === "🅾️" ],
    ]
  }

  switchPlayer = () => {
    var { currentPlayer } = this.state;
    if(currentPlayer === "p1"){
      return currentPlayer = "p2"
<<<<<<< HEAD
    } else {
=======
    }else if (currentPlayer === "p2"){
>>>>>>> 936d05820dd10d072be66014d5edf21c116cbe0e
      return currentPlayer = "p1"
    }
  }

  handleGamePlay = (index) => {
<<<<<<< HEAD
    var { squares, currentPlayer } = this.state
    if(currentPlayer === "p1"){
=======
    const { squares, currentPlayer } = this.state
    if(squares[index]=== null && currentPlayer === "p1"){
>>>>>>> 936d05820dd10d072be66014d5edf21c116cbe0e
      squares[index] = "❌"
      this.setState({squares: squares, currentPlayer: this.switchPlayer()})
    } else if (squares[index]=== null && currentPlayer === "p2"){
      squares[index] = "🅾️"
      this.setState({squares: squares, currentPlayer: this.switchPlayer()})
    }else if(squares[index] === "❌" || squares[index] === "🅾️" ){
      alert("NO!")
    }
    if(squares === this.isWinO){
      alert("p2 wins")
    }
<<<<<<< HEAD

    
  }

  render(){
    console.log("current player: ", this.state.currentPlayer)
=======
  }

  render(){
    console.log("currentPlayer:", this.state.currentPlayer)
>>>>>>> 936d05820dd10d072be66014d5edf21c116cbe0e
    console.log(this.state.squares);
    return(
      <>
        <h1>Tic Tac Toe</h1>
          <div className="gameBoard">
          { this.state.squares.map((value, index) => {
            return ( 
              <Square 
                value={ value }
                index={ index }
                key={ index }
                handleGamePlay={ this.handleGamePlay }
                />
            )
          })}
        </div>
        
      </>
    )
  }
}
export default App
