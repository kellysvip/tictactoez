import React from "react";

const History = ({ jumpTo, history }) => {
  // const node = document.createElement("li");
  // if (node && document.getElementById("history-list")) {
  //   node.innerHTML = `#Step ${count}`;
  //   document.getElementById("history-list").appendChild(node);
  // }

  return (
    <>
      <div className="history">
        <span>History</span>
        <div>Go to game start</div>
        <ul id="history-list">
          {history.map((x, move) => {
            const value = "#Step " + move;
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{value}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default History;
