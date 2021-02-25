import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      history: [],
      x: "x",
      o: "o",
      players: ["p1", "p2"],
      currentPlayer: "p1"
    }
  }
  
  isWinX = () =>{
  const {squares , x} = this.state
  const winCombosX = [
    [squares[0] === x  && squares[1] === x && squares[2] === x ],
    [squares[3] === x  && squares[4] === x && squares[5] === x ],
    [squares[6] === x  && squares[7] === x && squares[8] === x ],
    
    [squares[0] === x  && squares[3] === x && squares[6] === x ],
    [squares[1] === x  && squares[4] === x && squares[7] === x ],
    [squares[2] === x  && squares[5] === x && squares[8] === x ],

    [squares[0] === x  && squares[4] === x && squares[8] === x ],
    [squares[2] === x  && squares[4] === x && squares[6] === x ],
    ]
  }

  isWinO = () => {
  const {squares , o } = this.state
  const winCombosO = [
    [squares[0] === o  && squares[1] === o && squares[2] === o ],
    [squares[3] === o  && squares[7] === o && squares[8] === o ],
    
    [squares[0] === o  && squares[3] === o && squares[6] === o ],
    [squares[1] === o  && squares[4] === o && squares[7] === o ],
    [squares[2] === o  && squares[5] === o && squares[8] === o ],
  
    [squares[0] === o  && squares[4] === o && squares[8] === o ],
    [squares[2] === o  && squares[4] === o && squares[6] === o ],
    ]
  }

  switchPlayer = () => {
    const { currentPlayer } = this.state;
    if(currentPlayer[0] === currentPlayer[1]){
      currentPlayer = currentPlayer[0]
    } else {
      currentPlayer = currentPlayer[1]
    }
  }




  handleGamePlay = (index) => {
    const { squares, currentPlayer } = this.state
    if(currentPlayer === currentPlayer[0]){
      squares[index] = "❌"
      this.setState({squares: squares, currentPlayer: this.switchPlayer()})
    } else {
      squares[index] = "🅾️"
      this.setState({squares: squares, currentPlayer: this.switchPlayer()})
    }
    
  }

  render(){
    console.log(this.state.currentPlayer[0])
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
