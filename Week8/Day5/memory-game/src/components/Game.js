import React from 'react';
import Heroes from './Heroes'
import './Game.css'

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      superheroes: Heroes,
      score: 0,
      topScore: 0
    }
  }

  handleClick = (event) => {
   const {superheroes, score, topScore} = this.state;

    if(superheroes[event.target.id].clicked){
      this.setState({score: 0})
      if(score > topScore){
        this.setState({topScore: score})
      }
    } else {
      this.setState({score: score+1})
      superheroes[event.target.id].clicked = true;
    }

    superheroes.sort(() => Math.random()-0.5)
  }

  render(){
    const {superheroes, score, topScore, number} = this.state;

    if(score === 0){
      for(let i = 0; i < superheroes.length; i++){
        superheroes[i].clicked = false;
      }
    }

    return(
      <div>
        <div className='top'>
         <h1>Superheroes Memory Game</h1>
         <div className='scores'>
           <h4>Score: {score}</h4>
           <h4>Top Score: {topScore}</h4>
         </div>
        </div>
        <div className='bottom'>
         <h3>Get points by clicking on an image but don't click on any more than once!</h3>
       </div>
       <div className='container'>
         {
           superheroes.map((item, i)=> {
             return(
               <div id={i} key={i} className='card' onClick={this.handleClick}>
                 <img id={i} src={item.image} />
                 <p id={i}><strong>Name:</strong> {item.name}</p>
                 <p id={i}><strong>Occupation:</strong> {item.occupation}</p>
               </div>
             )
           })
         }
       </div>
      </div>
    )
  }
}

export default Game;
