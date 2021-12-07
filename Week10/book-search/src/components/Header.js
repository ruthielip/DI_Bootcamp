import '../App.css';
import read from './read.png'

const Header = (props) => {
  return(
    <div className='header'>
      <img src={read}/>
      <div className='header-text'>
        <h1>Book Search</h1>
        <p>Find your favorite books here</p>
      </div>
    </div>
  )
}

export default Header;
