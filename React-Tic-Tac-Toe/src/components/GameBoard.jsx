import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard]
      updatedGameBoard[rowIndex][colIndex] = 'X'
      return updatedGameBoard
    })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
  
}