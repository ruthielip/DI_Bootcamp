import React from 'react';
import QuoteInfo from './QuoteInfo';
import './Quotes.css'

class Quotes extends React.Component {
  constructor(){
    super()
    this.state = {
      quote: QuoteInfo[0].quote,
      author: QuoteInfo[0].author,
      color: '#71ad9c'
    }
  }

  randomQuoteGenerator = () =>{
    const random = Math.floor(Math.random()*QuoteInfo.length);
    return QuoteInfo[random]
  }


  randomColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return `#${color}`
  }

  shuffleQuotes = (quotes) => {
    return quotes.sort(()=> Math.random()-0.5)
  }

  handleClick = () => {
    console.log(this.randomColor())
    this.setState({
      quote: this.randomQuoteGenerator().quote,
      author: this.randomQuoteGenerator().author,
      color: this.randomColor()
    })
    this.shuffleQuotes(QuoteInfo)
  }

  render(){
  const {quote, author, color} = this.state;
  console.log(color)
    return(
      <>
      <div className='body' style={{backgroundColor: color}}>
       <div className='container'>
         <div className='fadeIn'>
           <h2 style={{color: color}}>"{quote}"</h2>
           <p className='author' style={{color: color}}>-{author}-</p><br/>
          </div>
         <button onClick={this.handleClick} style={{backgroundColor: color}}>New Quote</button>
       </div>
       </div>
      </>
    )
  }
}
export default Quotes;
