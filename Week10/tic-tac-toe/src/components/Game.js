import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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

    console.log(boardCopy[i])
  }

  return(
    <div>
    <div className='links'>
       <Link to='/'>Versus AI</Link>||
       <Link to='/2player' style={{backgroundColor: '#ffebf8'}}>2 Players</Link>||
       <a onClick={()=> setBoard(Array(9).fill(null))}>Reset Board</a>
    </div>
    {winner ? <p className='winner'>Winner: {winner}!</p> : xIsNext ? <p className='turn'>X's Turn</p> : <p className='turn'>O's Turn</p>}
    <Board squares={board} onClick={handleClick}/>
    </div>
  )
}

export default Game;
