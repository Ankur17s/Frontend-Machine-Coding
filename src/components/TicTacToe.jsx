import { useState } from "react";

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board) {
  for (let [a, b, c] of winningCombination) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] &&
      board[a] === board[c]
    ) {
      return true;
    } else null;
  }
  if (!board.includes(null)) return "Draw";
}

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = checkWinner(board);

  const handleBoard = (idx) => {
    if (board[idx] || winner) return;
    const newBoard = [...board];
    newBoard[idx] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setBoard(newBoard);
  };

  return (
    <div>
      <h2>TicTacToe</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 40px)",
          gap: 5,
        }}
      >
        {board.map((cell, idx) => (
          <div
            key={idx}
            style={{
              height: 40,
              width: 40,
              border: "1px solid black",
              fontSize: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleBoard(idx)}
          >
            {cell && cell}
          </div>
        ))}
      </div>
      {winner === "Draw" && <p>Match is Draw</p>}
      {winner === true && <p>Player {!isXTurn ? "X" : "O"} is Winner 🏆</p>}

      <button
        disabled={!winner}
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsXTurn(true);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
