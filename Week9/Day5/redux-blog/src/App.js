import logo from './logo.svg';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
    <div className='main'>
      <Navbar />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route path="/:post_id" component={Post}/>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
