import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Board from './Board';
import {calculateWinner} from '../calculate';

const Computer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const xIsNext = true;
  const winner = calculateWinner(board);

  useEffect(()=>{
    const computerTurn = board.filter(square => square !== null).length % 2 === 1;

    const putCompAt = (i) => {
      let newBoard = board;
      newBoard[i] = 'O';
      setBoard([...newBoard]);
    }
    if(computerTurn){
      const emptyBoxes = board
      .map((square, i)=> square === null ? i : null)
      .filter(val=> val !== null);

       if(emptyBoxes.length === 0 || winner){
         return;
       }

      const random = emptyBoxes[Math.ceil(Math.random()*emptyBoxes.length)];
      putCompAt(random);
    }
  }, [board, winner])

  const handleClick = (i) => {
   const playerTurn = board.filter(square => square !== null).length % 2 === 0;
   if(playerTurn){
     let newBoard = board;
     newBoard[i] = 'X';
     setBoard([...newBoard])
   }
  }

  return(
    <div>
    <div className='links'>
       <Link to='/' style={{backgroundColor: '#ffebf8'}}>Versus AI</Link>||
       <Link to='/2player'>2 Players</Link>||
       <a onClick={()=> setBoard(Array(9).fill(null))}>Reset Board</a>
    </div>
  {winner ? <p className='winner'>Winner: {winner}!</p> : xIsNext ? <p className='turn'>X's Turn</p> : <p className='turn'>O's Turn</p>}
    <Board squares={board} onClick={handleClick}/>
    </div>
  )
}

export default Computer;
