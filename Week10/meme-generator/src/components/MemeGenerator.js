import '../App.css';
import {useState, useEffect} from 'react';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('Top Text');
  const [bottomText, setBottomText] = useState('Bottom Text');
  const [random, setRandom] = useState('http://i.imgflip.com/1bij.jpg');
  const [allMemeImgs, setAllMemeImgs] = useState([])

  const getMemes = (e) => {
     e.preventDefault();
     let num = Math.floor(Math.random()*100);
     let arr = allMemeImgs;
     let newImage = arr[num];
     setRandom(newImage.url)
  };

  console.log(random)

  const topChange = (e) => {
     setTopText(e.target.value)
  }

  const bottomChange = (e) => {
     setBottomText(e.target.value)
  }

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then(data=>{
      setAllMemeImgs(data.data.memes)
    })
    .catch(err=>console.log(err))
  },[])


  return(
    <>
      <form className='meme-form'>
         <input placeholder='Top Text' onChange={topChange}/>
         <input placeholder='Bottom Text' onChange={bottomChange}/>
         <button onClick={getMemes}>Gen</button>
      </form>
      <div className='meme'>
         <img src={random} alt={random.name}/>
         <h2 className='top'>{topText}</h2>
         <h2 className='bottom'>{bottomText}</h2>
      </div>
    </>
  )
}

export default MemeGenerator;
