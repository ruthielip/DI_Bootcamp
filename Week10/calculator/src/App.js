import {useState} from 'react';
import './App.css';

function App() {
  const [calculate, setCalculate] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', 'x', '+', '-', '.'];

  const handleOp = (value) => {
    if(ops.includes(value) && calculate === '' ||
       ops.includes(value) && ops.includes(calculate.slice(-1))) {
         return;
       }
    setCalculate(calculate + value)

    if (!ops.includes(value)) {
      setResult(eval(calculate + value).toString())
    }
  }

  const getNumbers = () => {
    const numbers = [];

    for(let i=1; i<10; i++){
      numbers.push(<button onClick={() => handleOp(i.toString())} key={i}>{i}</button>)
    }
    return numbers;
  }

  const calculateOp = () => {
    setCalculate(eval(calculate).toString());
  }

   const deletePrev = () => {
     if(calculate === ''){
       return;
     } else {
       const value = calculate.slice(0, -1);
       setCalculate(value)
     }
   }

  return (
    <div className='main'>
    <div className='top'>
       <i class="fas fa-calculator"></i>
       <h1>Calculator</h1>
    </div>
      <div className='result'>
          <p>{calculate || '0'}</p>
      </div>
      <div className='calc'>
         <div className='numbers'>
            <button key={'AC'} onClick={deletePrev} style={{flex: '63.666%'}}>AC</button>
            <button key={'/'} onClick={()=>handleOp('/')}>/</button>
            {getNumbers()}
            <button key={0} onClick={()=>handleOp('0')} style={{flex: '63.666%', borderRadius:'0 0 0 8px'}}>0</button>
            <button key={'.'} onClick={()=>handleOp('.')}>.</button>
         </div>
         <div className='op'>
            <button key={'x'} onClick={()=>handleOp('x')}>x</button>
            <button key={'-'} onClick={()=>handleOp('-')}>-</button>
            <button key={'+'} onClick={()=>handleOp('+')}>+</button>

            <button key={'='} onClick={calculateOp} style={{flex: '50%', borderRadius:'0 0 8px 0'}}>=</button>
         </div>
      </div>
    </div>
  );
}

export default App;
