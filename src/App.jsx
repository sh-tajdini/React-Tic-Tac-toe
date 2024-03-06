
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
const[curPlayer, setCurPlayer] = useState('X');

const checkHorizontal = (board) => {
  for(let row of board){
    const rowSet = new Set(row);
    if(rowSet.size === 1 && !rowSet.has(undefined)){
      return true;
    }
  }
}
const checkForWin = (board) => {
  //horizontal
  if(checkHorizontal(board)){
    return true;
  }
  //vertical

  //diagonal

}
const handleClick = (r,c) => {
  board[r][c] = curPlayer;
  setBoard([...board]);
  if(checkForWin(board)){
    console.log(curPlayer + ' wins');
  }
  setCurPlayer(curPlayer === 'X'? 'Y':'X');
}
  return (
    <div>
     {board.map((row,r)=>{
      return (
        <div key ={r}
        style={{
          display:'flex',
        }}>
          {row.map((cell,c)=>{
            return (
            <div key={c} 
            onClick={() => handleClick(r,c)}
            style={{border: 'solid white 1px',
            height:'50px', 
            width:'50px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            }}>
              {cell}
              </div>);
          })}
        </div>
     )}
      )
     }
    </div>
    )

}

export default App
