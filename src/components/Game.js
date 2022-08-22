import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextStep, setNextStep] = useState(1);
  const [playerNext, setPlayerNext] = useState("X");
  const [winner, setWinner] = useState("");
  const [history, setHistory] = useState([]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const newSquare = [...squares];
    newSquare[i] = nextStep ? "X" : "O";
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    
    setSquares(newSquare);

    setNextStep(newSquare[i] === "X" ? 0 : 1);
    setPlayerNext(newSquare[i] === "X" ? "O" : "X");
    
    setHistory(
      [...history, squares]
    );
  };


  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setNextStep(1);
    setPlayerNext("X");
    setWinner("");
    setHistory([])
  };

  useEffect(() => {
    const _winner = calculateWinner(squares);
    setWinner(_winner);
  }, [squares]);

  const jumpTo = (step) => {
    setPlayerNext(step % 2 === 0 ? 'X' : 'O')
    setNextStep(step % 2 === 0 )
    setSquares(history[step])
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">Winner is: {winner}</h1>
        <p>Next player is: {playerNext}</p>
        <div className="game-content">
          <Board square={squares? squares: []} handleClick={handleClick} />

          <History history={history} jumpTo={jumpTo} />
        </div>
        <button className="btn-restart" onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default Game;
