import React from 'react';
import '../App.css';

const Square = (props) => {
  const {value, onClick} = props;
  return(
    <div>
    <button className='square' onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square;
