import React, { useState } from "react";
import "./App.css";

const Tictactoe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isOTurn, setIsOTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (index) => {
    if (boxes[index] || isGameOver) return;
    const newBoxes = boxes.slice();
    newBoxes[index] = isOTurn ? "O" : "X";
    setBoxes(newBoxes);

    if (checkWinner(newBoxes)) {
      setWinner(isOTurn ? "O" : "X");
      setIsGameOver(true);
    } else {
      setIsOTurn(!isOTurn);
    }
  };

  const checkWinner = (newBoxes) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        newBoxes[a] &&
        newBoxes[a] === newBoxes[b] &&
        newBoxes[a] === newBoxes[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setIsOTurn(true);
    setWinner(null);
    setIsGameOver(false);
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Tic Tac Toe Game</h1>
        {winner && (
          <div className="msg-container">
            <p id="msg">Congratulations, Winner is {winner}</p>
          </div>
        )}
        <div className="game">
          {boxes.map((box, index) => (
            <button
              key={index}
              className="box"
              onClick={() => handleClick(index)}
              disabled={box || isGameOver}
            >
              {box}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button id="reset-btn" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tictactoe;
