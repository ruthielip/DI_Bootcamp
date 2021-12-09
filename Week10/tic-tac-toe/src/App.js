import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game';
import Computer from './components/Computer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <>
    <div className="App">
      <h1>Tic Tac Toe</h1>

    </div>
    <Routes>
       <Route path='/2player' element={<Game/>} />
       <Route path='/' element={<Computer/>} />
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
