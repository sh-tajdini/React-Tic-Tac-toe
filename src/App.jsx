
import './App.css';
import  { useState } from 'react';
const generateBoard = (size) => {
  const newBoard = [];
  for (let i= 0; i<size; i++){
    newBoard.push([...Array(size)]);
  }
  return newBoard;
}
function App() {
const [board,setBoard] = useState(generateBoard(3));
console.log(board);

  return (
    <div>
      TicTacToe
    </div>)

}

export default App
