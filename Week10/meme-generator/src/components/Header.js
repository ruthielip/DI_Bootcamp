import '../App.css';
import troll from './troll.png'

const Header = () => {
  return(
    <>
    <header>
       <img src={troll} alt='troll'/>
       <p>Meme Generator</p>
    </header>
    </>
  )
}

export default Header;
