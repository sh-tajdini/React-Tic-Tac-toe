
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

const handleClick = (r,c) => {
  board[r][c] = curPlayer;
  setBoard([...board]);
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
