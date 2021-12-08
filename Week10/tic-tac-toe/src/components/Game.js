import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../calculate'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if(winner || boardCopy[i]) {
      return;
    }
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const jumpTo = () => {

  }

  return(
    <div>
    <div className='links'>
       <a href=''>Versus AI</a>||
       <a href=''>2 Players</a>||
       <a onClick={()=> setBoard(Array(9).fill(null))} href=''>Reset Board</a>
    </div>
    <p className='turn'>{winner ? 'Winner: ' + winner : `${(xIsNext ? 'X' : 'O')}'s Turn` }</p>
    <Board squares={board} onClick={handleClick}/>
    </div>
  )
}

export default Game;
