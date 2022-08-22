import React from "react";

const Board = ({handleClick, square}) => {
  return (
    <>
      <div className="board">
        <div className="board-row">
          <button className="btn square" onClick={() => handleClick(0)}>{square[0]}</button>
          <button className="btn square" onClick={() => handleClick(1)}>{square[1]}</button>
          <button className="btn square" onClick={() => handleClick(2)}>{square[2]}</button>
        </div>
        <div className="board-row">
          <button className="btn square" onClick={() => handleClick(3)}>{square[3]}</button>
          <button className="btn square" onClick={() => handleClick(4)}>{square[4]}</button>
          <button className="btn square" onClick={() => handleClick(5)}>{square[5]}</button>
        </div>
        <div className="board-row">
          <button className="btn square" onClick={() => handleClick(6)}>{square[6]}</button>
          <button className="btn square" onClick={() => handleClick(7)}>{square[7]}</button>
          <button className="btn square" onClick={() => handleClick(8)}>{square[8]}</button>
        </div>
      </div>
    </>
  );
};

export default Board;
