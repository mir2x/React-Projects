import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')
  
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      let activePlayer = 'X'
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        activePlayer = 'O'
      }
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: activePlayer},...prevTurns]
      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare}/>
      </div>
    </main>
  )
}

export default App
