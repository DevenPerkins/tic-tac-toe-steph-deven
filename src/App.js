import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      history: [],
      currentPlayer: "p1",
      gameOver: false
    }
  }
  
  isWin = (squares , player) => {
  if 
    ((squares[0] === this.getPlayerSymbol(player)  && squares[1] === this.getPlayerSymbol(player) && squares[2] === this.getPlayerSymbol(player)) ||
    (squares[3] === this.getPlayerSymbol(player)  && squares[4] === this.getPlayerSymbol(player) && squares[5] === this.getPlayerSymbol(player)) ||
    (squares[6] === this.getPlayerSymbol(player)  && squares[7] === this.getPlayerSymbol(player) && squares[8] === this.getPlayerSymbol(player)) ||
    
    (squares[0] === this.getPlayerSymbol(player)  && squares[3] === this.getPlayerSymbol(player) && squares[6] === this.getPlayerSymbol(player)) ||
    (squares[1] === this.getPlayerSymbol(player)  && squares[4] === this.getPlayerSymbol(player) && squares[7] === this.getPlayerSymbol(player)) ||
    (squares[2] === this.getPlayerSymbol(player)  && squares[5] === this.getPlayerSymbol(player) && squares[8] === this.getPlayerSymbol(player)) ||

    (squares[0] === this.getPlayerSymbol(player)  && squares[4] === this.getPlayerSymbol(player) && squares[8] === this.getPlayerSymbol(player)) ||
    (squares[2] === this.getPlayerSymbol(player)  && squares[4] === this.getPlayerSymbol(player) && squares[6] === this.getPlayerSymbol(player))){
      return true
    }else{
      return false
    }
  } 


  switchPlayer = () => {
    var { currentPlayer } = this.state;
    if(currentPlayer === "p1"){
      return currentPlayer = "p2"
    }else if (currentPlayer === "p2"){
      return currentPlayer = "p1"
    }
  }

  getCurrentPlayer = () => {
    return this.state.currentPlayer;
  }

  getPlayerSymbol = (player) => {
    if(player === "p1"){
      return "❌";
    } else {
        return "🅾"
    }
  }

  handleGamePlay = (index) => {
    const { squares, currentPlayer } = this.state
    if(squares[index]=== null){
      squares[index] = this.getPlayerSymbol(this.getCurrentPlayer())
      this.setState({squares: squares, currentPlayer: this.switchPlayer()})
      if(this.isWin(squares, this.getCurrentPlayer()) === true ){
        this.setState({gameOver:"win"})
      }
    }else if(squares[index] === "❌" || squares[index] === "🅾️" ){
      alert("NO!") 
    }
  }

  render(){
    console.log("currentPlayer:", this.state.currentPlayer)
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
        {
          this.state.gameOver &&
          <p className= "message">{`${this.getCurrentPlayer()} has won`}</p>
        }
      </>
    )
  }
}
export default App
